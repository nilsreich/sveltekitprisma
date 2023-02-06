import { PrismaClient } from '@prisma/client'
import { json } from '@sveltejs/kit';
const prisma = new PrismaClient()

export const GET = async () => {
    const data = await prisma.user.findMany()
    return json(data)
};

export const POST = (async ({request}) => {
    const content = await request.json()
    console.log (content)
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
    