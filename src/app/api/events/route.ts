import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const data = await request.json();
  console.log(data);
  return Response.json({ message: 'You have gotten all events' });
}
