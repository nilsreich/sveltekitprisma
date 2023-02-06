import { PrismaClient } from '@prisma/client'
import { json } from '@sveltejs/kit';
const prisma = new PrismaClient()

export const GET = async () => {
    const data = await prisma.user.findMany()
    return json(data)
};

export const POST = (async (request) => {

    const data = await prisma.profile.create({

        data: {
            bio: 'I like turtles',
            user: {
                connect: { id: 'cldspl7ey0000mg09yvpwsw7b' }
            }
        }
    })
    return json(data)
})
