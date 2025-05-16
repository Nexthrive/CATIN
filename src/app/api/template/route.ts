import prisma from "@/lib/prisma";
import { NextResponse, NextRequest } from "next/server";
import { promises as fs } from 'fs';
import path from 'path';

export async function GET() {
  try {
    //mengambil semua data template
    const templates = await prisma.template.findMany();

    //konversi thumbnail dari blob ke base64
    const templatesWithBase64 = templates.map(template => {
      return {
        ...template,
        Thumbnail: template.Thumbnail ? `data:image/jpeg;base64,${Buffer.from(template.Thumbnail).toString('base64')}` : null
      };
    });

    //return hasilnya
    return NextResponse.json({
      succes: true,
      message: "Get ALL template succesfull",
      data: templatesWithBase64,
    });
  } catch (error) {
    console.error("Error details:", error);
    return NextResponse.json(
      {
        succes: false,
        message: "Error retrieving Template data",
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

export async function POST(request: NextRequest) {
    try {
        const formData = await request.formData();
        const thumbnailFile = formData.get("thumbnail") as File | null;
        const tsxFile = formData.get("FIle") as File | null;
        
        // Mengambil semua data yang diperlukan dari formData
        const ID_Template = formData.get("ID_Template") as string;
        const Nama_Template = formData.get("Nama_Template") as string;
        const Lokasi_Template = formData.get("Lokasi_Template") as string;
        const Deskripsi_Template = formData.get("Deskripsi_Template") as string;
        const Tema = formData.get("Tema") as string;
        const Status = formData.get("Status") === "true";
        const PhotoAmount = parseInt(formData.get("PhotoAmount") as string) || 0;
        
        // Validasi data masing-masing field secara spesifik
        if (!ID_Template) {
            return NextResponse.json({
                success: false,
                message: "ID Template tidak boleh kosong"
            }, { status: 400 });
        }
        
        if (!Nama_Template) {
            return NextResponse.json({
                success: false,
                message: "Nama Template tidak boleh kosong"
            }, { status: 400 });
        }
        
        if (!Lokasi_Template) {
            return NextResponse.json({
                success: false,
                message: "Lokasi Template tidak boleh kosong"
            }, { status: 400 });
        }
        
        if (!Deskripsi_Template) {
            return NextResponse.json({
                success: false,
                message: "Deskripsi Template tidak boleh kosong"
            }, { status: 400 });
        }
        
        if (!Tema) {
            return NextResponse.json({
                success: false,
                message: "Tema tidak boleh kosong"
            }, { status: 400 });
        }
        
        if (!tsxFile) {
            return NextResponse.json({
                success: false,
                message: "File Template tidak boleh kosong"
            }, { status: 400 });
        }
        
        // Validasi tipe file tsx
        if (!tsxFile.name.endsWith('.tsx')) {
            return NextResponse.json({
                success: false,
                message: "File harus dalam format .tsx"
            }, { status: 400 });
        }
        
        if (!thumbnailFile) {
            return NextResponse.json({
                success: false,
                message: "Thumbnail tidak boleh kosong"
            }, { status: 400 });
        }
        
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
        
        // Buat direktori Template jika belum ada
        const templateDir = path.join(process.cwd(), 'public', 'Template');
        try {
            await fs.mkdir(templateDir, { recursive: true });
        } catch (error) {
            console.error("Error creating directory:", error);
        }
        
        // Buat nama file unik dengan ID dan nama file asli
        const tsxFileName = `${ID_Template}_${tsxFile.name}`;
        const filePath = path.join(templateDir, tsxFileName);
        
        // Simpan file tsx ke dalam folder public/Template
        const tsxArrayBuffer = await tsxFile.arrayBuffer();
        const tsxBuffer = Buffer.from(tsxArrayBuffer);
        await fs.writeFile(filePath, tsxBuffer);
        
        // Path relatif untuk database (dari public)
        const relativePath = `/Template/${tsxFileName}`;
        
        // Buat data sesuai skema
        const templateData = {
            ID_Template,
            Nama_Template,
            Lokasi_Template,
            Deskripsi_Template,
            Thumbnail: thumbnailBuffer,
            Status,
            Tema,
            FIle: relativePath ,// Simpan path relatif ke file
            PhotoAmount
        };
        
        // Buat template dengan data dan thumbnail
        const template = await prisma.template.create({
            data: templateData
        });
        
        // Buat objek respons tanpa binary data untuk thumbnail
        const responseData = {
            ID_Template: template.ID_Template,
            Nama_Template: template.Nama_Template,
            Lokasi_Template: template.Lokasi_Template,
            Deskripsi_Template: template.Deskripsi_Template,
            Status: template.Status,
            Tema: template.Tema,
            FIle: template.FIle,
            PhotoAmount: template.PhotoAmount // Path file yang tersimpan
        };
        
        return NextResponse.json({
            success: true,
            message: "Template berhasil dibuat",
            data: responseData
        });
    } catch (error) {
        console.error("Error details:", error);
        return NextResponse.json(
            {
                success: false,
                message: "Error membuat template",
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
