import { PrismaClient, Prisma } from "@/generated/prisma";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

const userData: Prisma.UserCreateInput[] = [
  {
    id_user: "nasjdh123h123",
    email: "nadra@gmail.com",
    name: "nadra",
    password: bcrypt.hashSync("nadra", 10),
  },
];

export async function main() {
  for (const u of userData) {
    await prisma.user.create({ data: u });
  }
}

main();
