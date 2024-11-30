import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(request) {
  const res = await request.json();
  //   console.log(res);
  const { nome, morada, cpostal, email, telemovel } = res;
  console.log({
    nome,
    morada,
    cpostal,
    email,
    telemovel,
  });

  const result = await prisma.Cliente.create({
    data: {
      nome,
      morada,
      cpostal,
      email,
      telemovel,
    },
  });

  return NextResponse.json({ result });
}
