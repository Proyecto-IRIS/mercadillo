<script setup lang="ts">
import { Category, Product } from '~/types';
const route = useRoute()
const { data: category } = await useFetch<Category>(`/api/categories/${route.params.category}`)
const { data: products } = await useFetch<Product[]>(`/api/products/${category.value?.path}`)

</script>
<template>
    <div class="m-4" style="font-family: Helvetica">
        <NuxtLink to="/catalogue">
            <h2 class="font-black text-4xl mb-8 flex gap-4 align-middle"><span class="text-2xl">←</span> <span>{{ category?.name }}</span></h2>
        </NuxtLink>
        <div v-if="products?.length != 0" class="grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
            <div v-for="product in products" class="border rounded-lg flex justify-center p-2 flex-col text-center">
                <img :src="product?.imageUrl" class="rounded-md object-scale-down my-2 basis-1/2 max-h-36">
                <p>{{ product.name }}</p>
            </div>
        </div>
        <div v-else class="text-center pt-4 text-lg text-gray-500">
            Nada por aquí... 😢
        </div>
    </div>
</template>