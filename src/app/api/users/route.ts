import { NextResponse } from 'next/server';
import { generateUserId } from '@/utils/generateUserId';
import { PrismaClient } from '../../../generated/prisma';

const prisma = new PrismaClient();

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, name, password } = body;

    const userId = generateUserId();  // Using default settings

    const user = await prisma.user.create({
      data: {
        id_user: userId,
        email,
        name,
        password, // Note: Remember to hash the password before saving
      },
    });

    return NextResponse.json({ 
      message: 'User created successfully',
      user: {
        id: user.id_user,
        email: user.email,
        name: user.name,
      }
    }, { status: 201 });

  } catch (error) {
    console.error('Error creating user:', error);
    return NextResponse.json({ 
      error: 'Failed to create user' 
    }, { status: 500 });
  }
} 