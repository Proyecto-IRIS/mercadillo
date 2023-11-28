<script setup lang="ts">
import { Category, Product } from '~/types';
import { MagnifyingGlassIcon } from '@heroicons/vue/24/solid'
const { data: categories } = await useFetch<Category[]>('/api/categories')
const products: Ref<{ [key: string]: Product[] | null | undefined }> = ref({})

categories.value?.forEach(async category => {
    const result = await useFetch<Product[]>(`/api/products/${category.path}`)

    products.value[category.path] = result.data.value

})
</script>

<template>
    <div class="m-4" style="font-family: Helvetica">
        <NuxtLink to="/">
            <h2 class="font-black text-4xl mb-8 flex gap-4 align-middle"><span class="text-2xl">←</span>
                <span>Catálogo</span></h2>
        </NuxtLink>
        <!-- <div v-for="category in categories" class="mb-8">
            <NuxtLink :to="`/catalogue/${category.path}`">
                <p class="text-2xl font-bold mb-2 text-center p-3 rounded-full text-white bg-blue-400 w-1/3 mx-auto">{{ category.name }}</p>
            </NuxtLink>
            <ProductCardGroup :products="products[category.path]" class="mb-8" />
            <hr>
        </div> -->
        <div class="flex gap-2 mb-8 border rounded">
            <input type="text" class=" h-8 w-full p-2" placeholder="Buscar...">
            <button class=""><MagnifyingGlassIcon class="w-6 mr-2 text-gray-400" /></button>
        </div>
        <div class="grid grid-cols-2 gap-2 md:grid-cols-4">
            <NuxtLink :to="`/catalogue/${category.path}`" v-for="category in categories">
                <div class="text-white bg-blue-300 h-24 rounded-lg p-2">
                    <p class="text-2xl font-bold mb-2">{{ category.name }}</p>
                </div>
            </NuxtLink>
        </div>

    </div>
</template>