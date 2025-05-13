import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import prisma from "@/lib/prisma";
import * as jose from 'jose';

const JWT_SECRET = process.env.JWT_SECRET as string;

if (!JWT_SECRET) {
  throw new Error("JWT_SECRET is not defined in environment variables");
}

interface TokenPayload extends jose.JWTPayload {
  id: string;
  email: string;
  role: 'admin'; 
}

async function generateToken(payload: TokenPayload) {
  const encoder = new TextEncoder();
  const secretKey = encoder.encode(JWT_SECRET);
  return await new jose.SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setExpirationTime('24h')
    .sign(secretKey);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, password } = body;

    if (!email || !password) {
      return NextResponse.json(
        { success: false, message: "Email and Password must be filled out" },
        { status: 400 },
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email) || password.length < 3) {
      return NextResponse.json(
        { success: false, message: "Email/password format is invalid" },
        { status: 400 },
      );
    }

    const admin = await prisma.admin.findUnique({ where: { email } });

    if (!admin) {
      return NextResponse.json(
        { success: false, message: "Invalid email or password" },
        { status: 400 },
      );
    }

    const passwordMatch = await bcrypt.compare(password, admin.password);

    if (!passwordMatch) {
      return NextResponse.json(
        { success: false, message: "Invalid email or password" },
        { status: 400 },
      );
    }

    // Explicitly type the payload to match TokenPayload
    const payload: TokenPayload = { 
      id: admin.id_admin, 
      email: admin.email,
      role: 'admin' // Now this is explicitly the literal 'admin' type
    };
    
    const token = await generateToken(payload);

    return NextResponse.json(
      {
        success: true,
        message: "Admin Login Success",
        data: { 
          id: admin.id_admin, 
          email: admin.email, 
          name: admin.name,
          token,
          role: 'admin' 
        },
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("Admin Login Error:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 },
    );
  }
}