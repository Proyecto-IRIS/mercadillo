import { prisma } from "../utils/prisma"

export default defineEventHandler(async (event) => {
    const result = await prisma.product.findMany()


    return result
})