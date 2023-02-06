import { PrismaClient } from '@prisma/client'
import { json } from '@sveltejs/kit';
const prisma = new PrismaClient()

export const GET = async () => {
    const data = await prisma.user.findMany()
    return json(data)
};

// update user profile bio
export const PUT = async (request) => {
    const { id, bio } = request.body
    const data = await prisma.user.update({
        where: { id },
        data: { bio }
    })
    return json(data)
}

//create user profile bio
export const POST = async (request) => {
    const { bio } = request.body
    const data = await prisma.user.create({
        data: { bio }
    })
    return json(data)
}

