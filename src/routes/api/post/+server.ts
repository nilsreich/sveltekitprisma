import prisma from "$lib/prisma";
import { json } from "@sveltejs/kit";

import type { RequestHandler } from "./$types";

export const POST: RequestHandler = async ({ request }) => {
  const { title } = await request.json();
  const createdPost = await prisma.post.create({
    data: {
      title: title,
    },
  });

  return json(createdPost);
};
