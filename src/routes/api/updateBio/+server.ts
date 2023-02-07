import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()


const addPost = async ( title:string)=>await prisma.post.create({
  data: {
    title: title,
  },
})


export const POST = (async ({ request }) => {
  const { bio } = await request.json();

  //  '.update' doesnt work on vercel, maybe create? 
const data = await prisma.user.findMany()  

  return json(data);
}) satisfies RequestHandler;