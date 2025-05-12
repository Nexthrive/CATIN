import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    // Get all admin data
    const admins = await prisma.admin.findMany();
    
    // Remove passwords from response
    const adminsWithoutPasswords = admins.map(admin => {
      const { password, ...adminWithoutPassword } = admin;
      return adminWithoutPassword;
    });

    return NextResponse.json(
      {
        success: true,
        message: "Admin Data List",
        data: adminsWithoutPasswords,
      },
      {
        status: 200, // 200 is more appropriate for GET requests
      }
    );
  } catch (error) {
    console.error("Error details:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Error retrieving admin data",
        error:
          error instanceof Error
            ? error.message
            : "An unknown error occurred. Please try again or contact support.",
      },
      {
        status: 500,
      }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Validate required fields
    if (!body.password) {
      return NextResponse.json(
        { success: false, message: "Password must be filled out" },
        { status: 400 }
      );
    }

    if (!body.email) {
      return NextResponse.json(
        { success: false, message: "Email must be filled out" },
        { status: 400 }
      );
    }

    if (!body.name) {
      return NextResponse.json(
        { success: false, message: "Name must be filled out" },
        { status: 400 }
      );
    }

    // Check if email already exists
    const existingAdmin = await prisma.admin.findUnique({
      where: { email: body.email },
    });

    if (existingAdmin) {
      return NextResponse.json(
        {
          success: false,
          message: "Email already in use",
        },
        {
          status: 409, // 409 Conflict is more appropriate for duplicate resources
        }
      );
    }

    // Hash password
    const saltRounds = 10; // Recommended to use at least 10 rounds
    const hashPassword = await bcrypt.hash(body.password, saltRounds);

    // Create admin (Prisma will automatically generate the UUID)
    const newAdmin = await prisma.admin.create({
      data: {
        name: body.name,
        email: body.email,
        password: hashPassword,
      },
    });

    // Remove password from response
    const { password, ...adminWithoutPassword } = newAdmin;

    return NextResponse.json(
      {
        success: true,
        message: "Admin created successfully",
        data: adminWithoutPassword,
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      {
        success: false,
        message: error instanceof Error 
          ? error.message 
          : "Error while creating admin",
      },
      {
        status: 500,
      }
    );
  }
}