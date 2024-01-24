import { event_model } from '@/server/models/event.model';
import { NextRequest, NextResponse } from 'next/server';
import Database from '@server/mongodb/db-connect';
import { currentUser } from '@clerk/nextjs';

//=============================================>
// ======= GET  -->
//=============================================>
export async function GET(request: NextRequest) {
  const user = await currentUser();
  if (!user) return new NextResponse('unAuthorized', { status: 401 });

  await Database.connect(user.id);
  const eventList = await event_model.find();

  await Database.close(user.id);
  return Response.json({
    status: 200,
    data: eventList,
    message: 'You have gotten all events',
  });
}

//=============================================>
// ======= post -->
//=============================================>
export async function POST(request: NextRequest) {
  const user = await currentUser();
  if (!user) return new NextResponse('unAuthorized', { status: 401 });
  await Database.connect(user.id);
  const data = await request.json();
  console.log(data);

  const new_event = await event_model.create(data);
  console.log(new_event);

  await Database.close(user.id);
  return Response.json({ message: 'New event created!' });
}
