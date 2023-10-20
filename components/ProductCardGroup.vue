<script setup lang="ts">
import { Stripe } from 'stripe'

type ApiResponse = Stripe.Response<Stripe.ApiList<Stripe.Product>>
const products = await $fetch<ApiResponse>("/api/products")

</script>

<template>
    <div class="grid grid-cols-5 gap-2">
        <ProductCard v-for="product in products.data" :product="product"></ProductCard>
    </div>
</template>