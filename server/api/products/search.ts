import { prisma } from "../../utils/prisma"

export default defineEventHandler(async (event) => {
    const query = getQuery<{ query: string }>(event).query
    const result = await prisma.product.findMany({
        where: {
            name: {
                search: decodeURI(query).split(' ').join('&')
            }
        }
    })

    return result
})