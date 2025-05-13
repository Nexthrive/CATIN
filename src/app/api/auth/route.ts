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

    const user = await prisma.user.findUnique({ where: { email } });

    if (!user) {
      return NextResponse.json(
        { success: false, message: "Invalid email" },
        { status: 400 },
      );
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return NextResponse.json(
        { success: false, message: "Invalid Password" },
        { status: 400 },
      );
    }

    const payload = { id: user.id_user, email: user.email };
    const token = await generateToken(payload);

    return NextResponse.json(
      {
        success: true,
        message: "Login Success",
        data: { id: user.id_user, email: user.email, token },
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("Login Error:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 },
    );
  }
}
