import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
 
export const POST = (async ({ request }) => {
  const { bio } = await request.json();
  return json(bio);
}) satisfies RequestHandler;