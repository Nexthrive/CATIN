import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  try {
    const Wedd = await prisma.wedding.findMany();

    return NextResponse.json(
      {
        success: true,
        message: "Wedding Data List",
        data: Wedd,
      },
      {
        status: 200,
      },
    );
  } catch (error) {
    console.error("Error details: ", error);
    return NextResponse.json(
      {
        success: true,
        message: "Error Query Wedding data",
      },
      {
        status: 500,
      },
    );
  }
}

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const bride_name = formData.get("bride_name")?.toString() || "";
    const bride_details = formData.get("bride_details")?.toString() || "";
    const groom_name = formData.get("groom_name")?.toString() || "";
    const groom_details = formData.get("groom_details")?.toString() || "";
    const nama_tempat = formData.get("nama_tempat")?.toString() || "";

    if (!bride_name) {
      return NextResponse.json(
        {
          success: false,
          message: "Bride Name must be filed out",
        },
        {
          status: 400,
        },
      );
    }

    if (!bride_details) {
      return NextResponse.json(
        {
          success: false,
          message: "Bride Details be filed out",
        },
        {
          status: 400,
        },
      );
    }

    if (!groom_name) {
      return NextResponse.json(
        {
          success: false,
          message: "Groom Name must be filed out",
        },
        {
          status: 400,
        },
      );
    }

    if (!groom_details) {
      return NextResponse.json(
        {
          success: false,
          message: "Groom Details must be filed out",
        },
        {
          status: 400,
        },
      );
    }

    if (!nama_tempat) {
      return NextResponse.json(
        {
          success: false,
          message: "Name Place must be filed out",
        },
        {
          status: 400,
        },
      );
    }

    const NewId = Math.random().toString(36).substring(1, 15);

    const newWedding = await prisma.wedding.create({
      data: {
        id_wedding: NewId,
        bride_name,
        bride_details,
        groom_name,
        groom_details,
        nama_tempat,
      },
    });

    return NextResponse.json(
      {
        success: true,
        message: "Success Post weding data",
        data: [],
      },
      {
        status: 201,
      },
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      {
        success: false,
        message: "Error Post wedding data",
      },
      {
        status: 500,
      },
    );
  }
}
