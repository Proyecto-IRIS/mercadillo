<script setup lang="ts">
import { Category, Product } from '~/types';
import { MagnifyingGlassIcon } from '@heroicons/vue/24/solid'
const { data: categories } = await useFetch<Category[]>('/api/categories')
const products: Ref<{ [key: string]: Product[] | null | undefined }> = ref({})

categories.value?.forEach(async category => {
    const result = await useFetch<Product[]>(`/api/products/${category.path}`)

    products.value[category.path] = result.data.value

})

const colors = [
    "bg-red-500",
    "bg-yellow-400",
    "bg-green-500",
    "bg-blue-500",
]


const images = [
    "undraw_breakfast_psiw.svg",
    "undraw_book_lover_re_rwjy.svg",
    "undraw_toy_car_-7-umw.svg",
    "undraw_fashion_photoshoot_mtq8.svg",
]

</script>
<template>
     <div class="m-4">
        <NuxtLink to="/">
            <h2 class="font-black text-4xl mb-8 flex gap-4 align-middle"><span class="text-2xl">←</span>
                <span>Catálogo</span></h2>
        </NuxtLink>
        <div class="flex gap-2 mb-8 border rounded-full bg-gray-100">
            <input type="text" class=" h-8 w-full p-2 rounded-full" placeholder="Buscar...">
            <button class=""><MagnifyingGlassIcon class="w-6 mr-2 text-gray-600" /></button>
        </div>
        <div class="grid grid-cols-2 gap-2 md:grid-cols-4">
            AAAAAAAAAAAAAAAAAAA
        </div>

    </div>
</template>