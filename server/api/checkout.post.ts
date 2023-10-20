export default defineEventHandler(async event => {

    type Body = {
        price: string
    }

    
    const body = await readBody<Body>(event);
    console.log(body.price)
    const checkoutLink = await stripe.checkout.sessions.create({
        line_items: [{
            price: body.price,
            quantity: 1
        }],
        mode: "payment",
        success_url: 'https://sjfsd.com',
        cancel_url: 'https://sjfsd.com'
    })

    return checkoutLink.url

})