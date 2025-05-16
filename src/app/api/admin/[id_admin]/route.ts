import { NextRequest, NextResponse } from 'next/server';
import bcrypt from "bcrypt";
import { prisma } from "@/lib/prisma";

// GET handler
export async function GET(
  request: NextRequest,
  context: { params: Promise<{ id_admin: string }> }
) {
  const params = await context.params;
  const { id_admin } = params;
  
  // Validasi ID
  if (!id_admin) {
    return NextResponse.json(
      { success: false, message: "Invalid admin ID" },
      { status: 400 }
    );
  }
  
  try {
    const admin = await prisma.admin.findUnique({
      where: { id_admin },
      select: {
        id_admin: true,
        name: true,
        email: true,
        createdAt: true,
        updatedAt: true,
      }
    });

    if (!admin) {
      return NextResponse.json(
        { success: false, message: "Admin not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Admin data retrieved successfully",
      data: admin,
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: "Error retrieving admin data",
      error: error instanceof Error ? error.message : "Unknown error",
    }, { status: 500 });
  }
}

// PUT handler
export async function PUT(
  request: NextRequest,
  context: { params: Promise<{ id_admin: string }> }
) {
  const params = await context.params;
  const { id_admin } = params;
  
  // Validasi ID
  if (!id_admin) {
    return NextResponse.json(
      { success: false, message: "Invalid admin ID" },
      { status: 400 }
    );
  }
  
  try {
    const body = await request.json();
    
    // Validasi body
    if (!body || typeof body !== 'object') {
      return NextResponse.json({
        success: false, 
        message: "Invalid request body"
      }, { status: 400 });
    }

    const existingAdmin = await prisma.admin.findUnique({
      where: { id_admin },
    });

    if (!existingAdmin) {
      return NextResponse.json({ 
        success: false, 
        message: "Admin not found" 
      }, { status: 404 });
    }

    // Persiapkan data update
    const updateData: any = {};
    
    // Update nama jika ada
    if (body.name) {
      updateData.name = body.name;
    }
    
    // Update email jika ada dan validasi email unik
    if (body.email && body.email !== existingAdmin.email) {
      const emailExists = await prisma.admin.findUnique({
        where: { email: body.email },
      });

      if (emailExists) {
        return NextResponse.json({ 
          success: false, 
          message: "Email already in use" 
        }, { status: 409 });
      }
      
      updateData.email = body.email;
    }
    
    // Update password jika ada
    if (body.password) {
      updateData.password = await bcrypt.hash(body.password, 10);
    }

    // Update admin
    const updatedAdmin = await prisma.admin.update({
      where: { id_admin },
      data: updateData,
      select: {
        id_admin: true,
        name: true,
        email: true,
        createdAt: true,
        updatedAt: true,
      }
    });

    return NextResponse.json({
      success: true,
      message: "Admin updated successfully",
      data: updatedAdmin,
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: error instanceof Error ? error.message : "Update error",
    }, { status: 500 });
  }
}

// DELETE handler
export async function DELETE(
  request: NextRequest,
  context: { params: Promise<{ id_admin: string }> }
) {
  const params = await context.params;
  const { id_admin } = params;
  
  // Validasi ID
  if (!id_admin) {
    return NextResponse.json(
      { success: false, message: "Invalid admin ID" },
      { status: 400 }
    );
  }
  
  try {
    const existingAdmin = await prisma.admin.findUnique({
      where: { id_admin },
    });

    if (!existingAdmin) {
      return NextResponse.json({ 
        success: false, 
        message: "Admin not found" 
      }, { status: 404 });
    }

    await prisma.admin.delete({
      where: { id_admin },
    });

    return NextResponse.json({ 
      success: true, 
      message: "Admin deleted successfully" 
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: error instanceof Error ? error.message : "Delete error",
    }, { status: 500 });
  }
} 