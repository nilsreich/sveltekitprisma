import { PrismaClient } from '@prisma/client'
import { json } from '@sveltejs/kit';
const prisma = new PrismaClient()

export const POST = (async ({request}) => {
    console.log(request)
    const content = await request.json()
    console.log(content)
    const data = await prisma.profile.create({

        data: {
            bio: content.bio,
            user: {
                connect: { id: 'cldspl7ey0000mg09yvpwsw7b' }
            }
        }
    })
    return json(data)
})
