export default defineEventHandler(async event => {
        
    const products = await stripe.products.list({
        active: true,
        expand: ["data.default_price"]
    })

    return products
})