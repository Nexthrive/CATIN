import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { prisma } from "@/lib/prisma";

// GET single admin by ID
export async function GET(
  request: Request,
  { params }: { params: { id_admin: string } }
) {
  try {
    const admin = await prisma.admin.findUnique({
      where: { id_admin: params.id_admin },
    });

    if (!admin) {
      return NextResponse.json(
        {
          success: false,
          message: "Admin not found",
        },
        {
          status: 404,
        }
      );
    }

    // Remove password from response
    const { password, ...adminWithoutPassword } = admin;

    return NextResponse.json(
      {
        success: true,
        message: "Admin data retrieved successfully",
        data: adminWithoutPassword,
      },
      {
        status: 200,
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

// UPDATE admin by ID
export async function PUT(
  request: Request,
  { params }: { params: { id_admin: string } }
) {
  try {
    const body = await request.json();

    // Check if admin exists
    const existingAdmin = await prisma.admin.findUnique({
      where: { id_admin: params.id_admin },
    });

    if (!existingAdmin) {
      return NextResponse.json(
        {
          success: false,
          message: "Admin not found",
        },
        {
          status: 404,
        }
      );
    }

    // If password is being updated, hash the new password
    let hashedPassword = existingAdmin.password;
    if (body.password) {
      const saltRounds = 10;
      hashedPassword = await bcrypt.hash(body.password, saltRounds);
    }

    // Check if new email already exists (if it's being changed)
    if (body.email && body.email !== existingAdmin.email) {
      const emailExists = await prisma.admin.findUnique({
        where: { email: body.email },
      });

      if (emailExists) {
        return NextResponse.json(
          {
            success: false,
            message: "Email already in use by another admin",
          },
          {
            status: 409,
          }
        );
      }
    }

    // Update admin
    const updatedAdmin = await prisma.admin.update({
      where: { id_admin: params.id_admin },
      data: {
        name: body.name || existingAdmin.name,
        email: body.email || existingAdmin.email,
        password: hashedPassword,
      },
    });

    // Remove password from response
    const { password, ...adminWithoutPassword } = updatedAdmin;

    return NextResponse.json(
      {
        success: true,
        message: "Admin updated successfully",
        data: adminWithoutPassword,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      {
        success: false,
        message: error instanceof Error
          ? error.message
          : "Error while updating admin",
      },
      {
        status: 500,
      }
    );
  }
}

// DELETE admin by ID
export async function DELETE(
  request: Request,
  { params }: { params: { id_admin: string } }
) {
  try {
    // Check if admin exists
    const existingAdmin = await prisma.admin.findUnique({
      where: { id_admin: params.id_admin },
    });

    if (!existingAdmin) {
      return NextResponse.json(
        {
          success: false,
          message: "Admin not found",
        },
        {
          status: 404,
        }
      );
    }

    // Delete admin
    await prisma.admin.delete({
      where: { id_admin: params.id_admin },
    });

    return NextResponse.json(
      {
        success: true,
        message: "Admin deleted successfully",
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      {
        success: false,
        message: error instanceof Error
          ? error.message
          : "Error while deleting admin",
      },
      {
        status: 500,
      }
    );
  }
}