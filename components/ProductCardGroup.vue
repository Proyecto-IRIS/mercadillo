<script setup lang="ts">
import { Stripe } from 'stripe'

type ApiResponse = Stripe.Response<Stripe.ApiList<Stripe.Product>>
const products = await $fetch<ApiResponse>("/api/products")

</script>

<template>
    <div class="sm:grid sm:grid-cols-3 md:grid-cols-5 sm:gap-2 gap-6 flex flex-col">
        <ProductCard v-for="product in products.data" :product="product"></ProductCard>
    </div>
</template>