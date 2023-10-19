<script setup lang="ts">
import { Stripe } from 'stripe'

const stripe = new Stripe("sk_test_51Nv25kDdZ8symvlPfA4J8guLW0QJXM2va3xZd5c0DCIDUBgJqTMriJA9n3hWXDHbX5DoYo0YiTC1Yc4YR2NO917A00hKLcWJrt", {
    apiVersion: '2023-10-16'
})

const products = await stripe.products.list({
    active: true,
    expand: ["data.default_price"]
})

</script>

<template>
    <div class="grid grid-cols-3 gap-2">
        <ProductCard v-for="product in products.data" :product="product"></ProductCard>
    </div>
</template>