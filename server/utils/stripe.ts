import { Stripe } from 'stripe'

export const stripe = new Stripe("sk_test_51Nv25kDdZ8symvlPfA4J8guLW0QJXM2va3xZd5c0DCIDUBgJqTMriJA9n3hWXDHbX5DoYo0YiTC1Yc4YR2NO917A00hKLcWJrt", {
    apiVersion: '2023-10-16'
})