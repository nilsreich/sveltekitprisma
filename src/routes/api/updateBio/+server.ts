import prisma from "$lib/prisma";
import { json } from "@sveltejs/kit";

import type { RequestHandler } from "./$types";

export const POST: RequestHandler = async ({ request }) => {
  const { bio } = await request.json();
  const createdPost = await prisma.post.create({
    data: {
      title: bio,
    },
  });

  return json(createdPost);
};
