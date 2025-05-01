import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import prisma from "@/lib/prisma";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, password } = body;

    if (!email || !password) {
      return NextResponse.json(
        {
          success: false,
          message: "Email and Password must be filled out"
        },
        { status: 400 }
      );
    }

    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid email or password"
        },
        {
          status: 401
        }
      );
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid email or password"
        },
        {
          status: 401
        }
      );
    }

    const jwt = require('jsonwebtoken');
    const jwtToken = jwt.sign({ id: user.id_user, email: user.email }, process.env.JWT_SECRET);

    return NextResponse.json(
      {
        success: true,
        message: "Login Success",
        data: {
          id: user.id_user,
          email: user.email,
          token: jwtToken
        }
      },
    )

  } catch (error) {
    console.error("Login Error :", error);
    return NextResponse.json(
      {
        success: false, 
        message: "Internal server error"
      },
      {
        status: 500
      }
    )
  }
}




