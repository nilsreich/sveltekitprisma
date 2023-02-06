import { PrismaClient } from '@prisma/client'
import { json } from '@sveltejs/kit';
const prisma = new PrismaClient()

export const POST = (async () => {
  const data = await prisma.user.findMany();

  return json({ data });
});