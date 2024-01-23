import { NextRequest, NextResponse } from 'next/server';
import { currentUser } from '@clerk/nextjs';
import { user_model } from '@/server/models/user.model';
import Database from '@/server/mongodb/db-connect';

//=============================================>
// ======= GET -->
//=============================================>
export async function GET(req: NextRequest): Promise<Response> {
  const user = await currentUser();

  // ======= check if user exists -->
  if (!user) return new NextResponse('unauthorized', { status: 401 });

  // ======= check if user is admnin -->
  const mongo_profile: User | null = await user_model.findOne({
    'personal.clerk_id': user.id,
  });

  // ======= no mongo profile -->
  if (!mongo_profile) return new NextResponse('not-found', { status: 404 });

  return Response.json({
    status: 200,
    message: 'ALl users fetched!',
    data: null,
  });
}

//=============================================>
// ======= POST -->
//=============================================>
export async function POST(req: NextRequest): Promise<Response> {
  await Database.connect();

  // ======= get user from clerk -->
  const user = await currentUser();
  if (!user) return new NextResponse('unauthorized', { status: 401 });

  // ======= check if user exists -->
  const userExists = await user_model.findOne({
    'personal.clerk_id': user.id,
  });
  if (userExists)
    return Response.json({
      status: 403,
      message: 'User exists!',
      data: userExists,
    });

  // ======= create new user if no existing user -->
  const userData: User = {
    personal: {
      first_name: user.firstName as string,
      last_name: user.lastName as string,
      clerk_id: user.id,
      password_enabled: user.passwordEnabled,
      profile_image: user.hasImage
        ? user.imageUrl
        : 'https://as1.ftcdn.net/v2/jpg/03/39/45/96/1000_F_339459697_XAFacNQmwnvJRqe1Fe9VOptPWMUxlZP8.jpg',
      contact: {
        email: user.emailAddresses.map((item) => item.emailAddress),
        phone: user.phoneNumbers.map((item) => item.phoneNumber),
        prefered: 'email',
      },
    },
  };
  const newUser = await user_model.create(userData);
  await Database.close();

  return Response.json({
    status: 200,
    message: 'New user created!',
    data: newUser,
  });
}
