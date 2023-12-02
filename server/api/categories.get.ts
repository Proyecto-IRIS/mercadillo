import { prisma } from "../utils/prisma"

export default defineEventHandler(async (event) => {
    const result = await prisma.category.findMany()
    
    return result
})