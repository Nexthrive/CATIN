import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import next from "next";

// export async function GET () {
//     try{
//         // Mengambil data tamu
//         const Tamu = await prisma.tamu.findMany();
//         // Membuat response dengan nextresponse
//         return NextResponse.json(
//             {
//                 succes: true,
//                 message: "Tamu Data List",
//                 data: Tamu,
//             },
//             {
//                 status: 200,
//             }
//         );
//     } catch (error) {
//         console.error("Error details:", error);
//         return NextResponse.json(
//             {
//                 succes: false,
//                 message: "Error retrieving tamu data",
//                 error:
//                     error instanceof Error
//                     ? error.message
//                     : "Terjadi kesalahan yang tidak diketahui. Silakan coba lagi atau hubungi tim support.",                
//             },
//             {
//                 status: 500,
//             }
//         )
//     }
// }

export async function POST (request:Request) {
    try{
    // initialize the json data
    const body = await request.json();

    // create the data for the tamu table (manually filled json format)
    const newTamu = await prisma.tamu.create({
        data : body
    });


    // Response
    return NextResponse.json(
        {
            succes: true,
            message: "Data Berhasil Dibuat",
            data: newTamu
        },
        {
            status : 201
        }
    )
} catch (error) {
    console.log ("Failed to create tamu", Error)
    return NextResponse.json(
        {
            succes: false,
            message: "Data Gabisa dibuat kontol"
        },
        {
            status : 500
        }
    )
}
}