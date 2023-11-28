<script setup lang="ts">
import { Category, Product } from '~/types';

const { data: categories } = await useFetch<Category[]>('/api/categories')
const products: Ref<{ [key: string]: Ref<Product[] | null | undefined> }> = ref({ })

categories.value?.forEach(async category => {
    const result = await useFetch<Product[]>(`/api/products/${category.path}`)

    console.log(result.data)
    products.value[category.path] = result.data
    
})
</script>

<template>
    <div class="m-4" style="font-family: Helvetica">
        <Header />
        <div v-for="category in categories" class="mb-8">
            <p class="text-2xl font-bold mb-2 border-2 w-max p-2 rounded-md border-sky-200">{{ category.name }} 🡢</p>
            <ProductCardGroup :products="products[category.path]" />
        </div>

    </div>
</template>