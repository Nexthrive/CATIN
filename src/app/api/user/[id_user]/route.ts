import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(
  request: NextRequest,
  context: { params: Promise<{ id_user: string }> }
) {
  try {
    const params = await context.params;
    const id_user = params.id_user;

    // Cek validasi ID
    if (!id_user) {
      return NextResponse.json(
        { success: false, message: "ID tidak valid" },
        { status: 400 }
      );
    }

    // Cari user berdasarkan ID
    const user = await prisma.user.findUnique({
      where: {
        id_user: id_user,
      },
    });

    // Jika user tidak ditemukan
    if (!user) {
      return NextResponse.json(
        { success: false, message: "User tidak ditemukan" },
        { status: 404 }
      );
    }

    // Hapus password dari response
    const { password, ...userWithoutPassword } = user;

    // Kembalikan data user
    return NextResponse.json(
      {
        success: true,
        message: "User berhasil ditemukan",
        data: userWithoutPassword,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error detail:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Terjadi kesalahan server",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
} 