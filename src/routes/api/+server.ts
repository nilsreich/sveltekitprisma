import { PrismaClient } from '@prisma/client'
import { json } from '@sveltejs/kit';
import { page } from '$app/stores';

const prisma = new PrismaClient()

export const GET = async () => {
    const data = await prisma.user.findMany()
    return json(data)
};

export const POST = async (request) => {
    const { bio } = await request.body
    console.log($page.data)
    const data = await prisma.profile.create({
        data: {
            bio: bio,
            user: {
                connect: { id: 'cldsmhb050000l608ehbt70di' }
            }
        }
    })
    return json(data)
}

