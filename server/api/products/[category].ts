export default defineEventHandler(async (event) => {
    const category = getRouterParam(event, 'category')
  
    const result = await prisma.product.findMany({
        where: {
            category: {
                path: category
            }
        }
    })

    return result
  })