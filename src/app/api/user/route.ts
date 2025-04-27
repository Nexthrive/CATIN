import { NextResponse } from "next/server";
import bcrypt from "bcrypt"
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    // mengambil data User
    const User = await prisma.user.findMany();
    // membuat response dengan memakai nextresponse
    return NextResponse.json(
      {
        succes: true,
        message: "User Data List",
        data: User,
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    console.error("Error details:", error);
    return NextResponse.json(
      {
        succes: false,
        message: "Error retrieving user data",
        error:
          error instanceof Error
            ? error.message
            : "Terjadi kesalahan yang tidak diketahui. Silakan coba lagi atau hubungi tim support.",
      },
      {
        status: 500,
      }
    );
  }
}

export async function POST(request: Request) {
  try {
    // Request
    const body = await request.json();

    //validasi Password harus diisi
    if (!body.password) {
        return NextResponse.json(
            {succes: false, message : "Password must be fill out"},
            {status : 400}
        );
    }

    //cek username atau email sudah ada atau tidak
    const ExistingEmailorUsername = await prisma.user.findFirst(
      {
        where : {
          OR : [
            {email : body.email},
            {name : body.name}
          ]
        }
      }
    )
    if (ExistingEmailorUsername) {
      return NextResponse.json(
        {
          succes : false,
          message : "your email or username has already been taken"
        }, {
          status : 401
        }
      )
    }    

    //enkripsi Password
    const saltRounds = 5;
    const hashPassword = await bcrypt.hash(body.password, saltRounds);

    //random id user
    const NewId = Math.random().toString(36).substring(1,15);

    //Create User
    const newUser = await prisma.user.create({
      data: {
        ...body,
        id_user : NewId,
        password : hashPassword,
      }
    });

    //hapus password di response
    const {password, ...userWithoutPassword} = newUser

    return NextResponse.json(
      {
        succes: true,
        message: "Create User Succes",
        data: userWithoutPassword,
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    console.error("error :", error);
    return NextResponse.json(
      {
        succes: false,
        message:
          error instanceof Error ? error.message : "Error While Creating User",
      },
      {
        status: 500,
      }
    );
  }
}
