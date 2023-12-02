export default defineEventHandler(async (event) => {
    const path = getRouterParam(event, 'path')
  
    const result = await prisma.category.findFirst({
        where: {
            path: path
        }
    })

    return result
  })