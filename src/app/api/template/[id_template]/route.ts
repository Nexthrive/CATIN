import { NextResponse, NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";
import fs from "fs/promises";
import path from "path";

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

    const formData = await request.formData();
    
    // Ambil data dari form
    const thumbnailFile = formData.get("thumbnail") as File | null;
    const tsxFile = formData.get("FIle") as File | null;
    
    // Data yang akan diupdate
    const updateData: any = {};
    
    // Update field teks jika ada
    if (formData.has("Nama_Template")) {
      updateData.Nama_Template = formData.get("Nama_Template") as string;
    }
    
    if (formData.has("Lokasi_Template")) {
      updateData.Lokasi_Template = formData.get("Lokasi_Template") as string;
    }
    
    if (formData.has("Deskripsi_Template")) {
      updateData.Deskripsi_Template = formData.get("Deskripsi_Template") as string;
    }
    
    if (formData.has("Tema")) {
      updateData.Tema = formData.get("Tema") as string;
    }
    
    if (formData.has("Status")) {
      updateData.Status = formData.get("Status") === "true";
    }
    
    if (formData.has("PhotoAmount")) {
      updateData.PhotoAmount = parseInt(formData.get("PhotoAmount") as string) || 0;
    }
    
    // Update thumbnail jika ada
    if (thumbnailFile) {
      // Validasi tipe gambar thumbnail
      const thumbnailType = thumbnailFile.type;
      if (!thumbnailType.startsWith('image/')) {
        return NextResponse.json({
          success: false,
          message: "Thumbnail harus berupa gambar"
        }, { status: 400 });
      }
      
      // Konversi thumbnail ke blob untuk disimpan
      const thumbnailArrayBuffer = await thumbnailFile.arrayBuffer();
      const thumbnailBuffer = Buffer.from(thumbnailArrayBuffer);
      
      updateData.Thumbnail = thumbnailBuffer;
    }
    
    // Update file tsx jika ada
    if (tsxFile) {
      // Validasi tipe file tsx
      if (!tsxFile.name.endsWith('.tsx')) {
        return NextResponse.json({
          success: false,
          message: "File harus dalam format .tsx"
        }, { status: 400 });
      }
      
      // Buat direktori Template jika belum ada
      const templateDir = path.join(process.cwd(), 'public', 'Template');
      try {
        await fs.mkdir(templateDir, { recursive: true });
      } catch (error) {
        console.error("Error membuat direktori:", error);
      }
      
      // Hapus file lama jika ada
      if (existingTemplate.FIle) {
        try {
          const oldFilePath = path.join(process.cwd(), 'public', existingTemplate.FIle);
          await fs.unlink(oldFilePath);
        } catch (error) {
          console.error("Error menghapus file lama:", error);
        }
      }
      
      // Buat nama file unik dengan ID dan nama file asli
      const tsxFileName = `${id_template}_${tsxFile.name}`;
      const filePath = path.join(templateDir, tsxFileName);
      
      // Simpan file tsx ke dalam folder public/Template
      const tsxArrayBuffer = await tsxFile.arrayBuffer();
      const tsxBuffer = Buffer.from(tsxArrayBuffer);
      await fs.writeFile(filePath, tsxBuffer);
      
      // Path relatif untuk database (dari public)
      const relativePath = `/Template/${tsxFileName}`;
      updateData.FIle = relativePath;
    }
    
    // Update template di database
    const updatedTemplate = await prisma.template.update({
      where: { ID_Template: id_template },
      data: updateData
    });
    
    // Buat objek respons tanpa binary data untuk thumbnail
    const responseData = {
      ID_Template: updatedTemplate.ID_Template,
      Nama_Template: updatedTemplate.Nama_Template,
      Lokasi_Template: updatedTemplate.Lokasi_Template,
      Deskripsi_Template: updatedTemplate.Deskripsi_Template,
      Status: updatedTemplate.Status,
      Tema: updatedTemplate.Tema,
      FIle: updatedTemplate.FIle,
      PhotoAmount: updatedTemplate.PhotoAmount
    };
    
    return NextResponse.json({
      success: true,
      message: "Template berhasil diperbarui",
      data: responseData
    });
  } catch (error) {
    console.error("Error details:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Error memperbarui template",
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
