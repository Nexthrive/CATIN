import { PrismaClient, Prisma } from "@/generated/prisma";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

const userData: Prisma.UserCreateInput[] = [
  {
    id_user : "nasjdh123h123", 
    email: "nadra@gmail.com",
    name: "nadra",
    password: bcrypt.hashSync("nadra", 10),
  },
];
const templateData: Prisma.TemplateCreateInput[] = [
  {
  ID_Template : "asdasdas",
  Lokasi_Template : "example", 
  Nama_Template : "MODERN",
  Tema : "ADAT JAWA X SUNDA",
  Deskripsi_Template : "EXAMPLE",
  Thumbnail : Buffer.from("example image data"),
  FIle: "example",
  PhotoAmount: 5,
},
]

export async function main() {
  for (const u of userData) {
    await prisma.user.create({ data: u })
  }

  for (const t of templateData) {
    await prisma.template.create({ data: t })
  }
}

main()