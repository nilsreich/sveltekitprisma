import { PrismaClient } from '@prisma/client'
import { json } from '@sveltejs/kit';
const prisma = new PrismaClient()

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
