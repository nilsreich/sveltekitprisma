import { PrismaClient } from '@prisma/client'
import { json } from '@sveltejs/kit';
const prisma = new PrismaClient()

export const PUT = (async ({request}) => {
    const content = await request.json()
    const data = await prisma.profile.create({

        data: {
            bio: content.bio,
            user: {
                connect: { id: content.id }
            }
        }
    })
    return json(data)
})
