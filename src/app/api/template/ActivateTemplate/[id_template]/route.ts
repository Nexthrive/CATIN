import { NextResponse, NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";

export async function PUT(
  request: NextRequest,
  context: { params: Promise<{ id_template: string }> }
) {
  try {
    const params = await context.params;
    const { id_template } = params;
    
    // Validasi ID
    if (!id_template) {
      return NextResponse.json(
        { success: false, message: "ID Template tidak valid" },
        { status: 400 }
      );
    }

    // Cek apakah template ada
    const existingTemplate = await prisma.template.findUnique({
      where: { ID_Template: id_template },
    });

    if (!existingTemplate) {
      return NextResponse.json(
        { success: false, message: "Template tidak ditemukan" },
        { status: 404 }
      );
    }
    
    // Toggle status template (aktif/nonaktif)
    const newStatus = !existingTemplate.Status;
    
    const updatedTemplate = await prisma.template.update({
      where: { ID_Template: id_template },
      data: { 
        Status: newStatus
      },
    });

    const statusMessage = newStatus 
      ? "Status template berhasil diaktifkan" 
      : "Status template berhasil dinonaktifkan";

    return NextResponse.json({
      success: true,
      message: statusMessage,
      data: {
        ID_Template: updatedTemplate.ID_Template,
        Nama_Template: updatedTemplate.Nama_Template,
        Status: updatedTemplate.Status
      }
    });
  } catch (error) {
    console.error("Error details:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Error mengubah status template",
        error: error instanceof Error
          ? error.message
          : "Terjadi kesalahan yang tidak diketahui. Silakan coba lagi atau hubungi tim support."
      },
      {
        status: 500
      }
    );
  }
}
