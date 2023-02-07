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

  //  this doesnt work on vercel: 
  //  await updatePost(2, bio)

  // this works on vercel:
  await prisma.post.update({
    where: {
      id: 2,
    },
    data: {
      title: bio,
    },
  })
  

  return json(bio);
}) satisfies RequestHandler;