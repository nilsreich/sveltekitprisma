import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const POST = (async ({ request }) => {
  const { bio } = await request.json();

  const data = await prisma.profile.create({
    data: {
      bio: bio,
      user: {
        connect: {
          id: 'cldspl7ey0000mg09yvpwsw7b'
        }
      }
    }
  })

  return json(data);
}) satisfies RequestHandler;