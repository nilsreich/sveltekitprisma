import { PrismaClient } from '@prisma/client'
import { json } from '@sveltejs/kit';
const prisma = new PrismaClient()

export const POST =  (async ({ request }) => {
  const feed = await request.json()
  const res = await fetch(feed.feed);
  return json(weather);
});