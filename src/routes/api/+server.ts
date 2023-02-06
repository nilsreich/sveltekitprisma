import { PrismaClient } from '@prisma/client'
import { json } from '@sveltejs/kit';
const prisma = new PrismaClient()

export const GET = async () => {
    const data = await prisma.user.findMany()
    return json(data)
};

export const POST = async (request) => {
    
    const { bio, id } = await request.body
console.log(bio, id)
    const data = await prisma.profile.create({

        data: {
            bio: bio,
            user: {
                connect: { id: id }
            }
        }
    })
    return json(data)
}
