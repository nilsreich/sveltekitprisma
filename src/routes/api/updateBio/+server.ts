import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const POST = (async ({ request }) => {
  const { bio } = await request.json();

  const createPost = await prisma.post.create({
    data: {
      title: bio,
      
    },

  })
  return json(createPost);
}) satisfies RequestHandler;