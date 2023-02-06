import { PrismaClient } from '@prisma/client'
import { json } from '@sveltejs/kit';
const prisma = new PrismaClient()

export const POST = (async ({ request }) => {
  const body = await request.json()
  console.log(body.bio, body.id)

  const data = await prisma.profile.create({
    data: {
      bio: body.bio,
      user: {
        connect: {
          id: body.id
        }
      }
    },

  })

  return json({ data });
});