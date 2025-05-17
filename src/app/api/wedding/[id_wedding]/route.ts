import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  context: {
    params: Promise<{ id_wedding: string }>;
  },
) {
  try {
    const params = await context.params;
    const id_wedding = params.id_wedding;

    if (!id_wedding) {
      return NextResponse.json(
        {
          success: false,
          message: "ID tidak valid",
        },
        {
          status: 400,
        },
      );
    }

    const wedding = await prisma.wedding.findUnique({
      where: {
        id_wedding: id_wedding,
      },
    });

    if (!wedding) {
      return NextResponse.json(
        {
          success: false,
          message: "None Wedding found",
        },
        {
          status: 404,
        },
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Success Get Wedding Data",
        data: wedding,
      },
      {
        status: 200,
      },
    );
  } catch (error) {
    console.error("Error detail: ", error);
    return NextResponse.json(
      {
        success: false,
        message: "Internal server error",
      },
      {
        status: 500,
      },
    );
  }
}

export async function PUT(
  request: NextRequest,
  context: { params: Promise<{ id_wedding: string }> },
) {
  try {
    const params = await context.params;
    const id_wedding = params.id_wedding;

    if (!id_wedding) {
      return NextResponse.json(
        {
          success: false,
          message: "ID tidak valid",
        },
        {
          status: 400,
        },
      );
    }

    const formData = await request.formData();

    const bride_name = formData.get("bride_name")?.toString() || "";
    const bride_details = formData.get("bride_details")?.toString() || "";
    const groom_name = formData.get("groom_name")?.toString() || "";
    const groom_details = formData.get("groom_details")?.toString() || "";
    const nama_tempat = formData.get("nama_tempat")?.toString() || "";

    const updateWedding = await prisma.wedding.update({
      where: {
        id_wedding: id_wedding,
      },
      data: {
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
        data: updateWedding,
      },
      {
        status: 200,
      },
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      {
        success: false,
        message: "Internal server error",
      },
      {
        status: 500,
      },
    );
  }
}
