import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()


const updatePost = async (id:number, bio:string)=>await prisma.post.update({
  where: {
    id: id,
  },
  data: {
    title: bio,
  },
})


export const POST = (async ({ request }) => {
  const { bio } = await request.json();

  await updatePost(2, bio)

  return json(bio);
}) satisfies RequestHandler;