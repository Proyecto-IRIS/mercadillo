<script setup lang="ts">
import { Category, Product } from '~/types';
import { MagnifyingGlassIcon, ArrowLeftIcon } from '@heroicons/vue/24/solid'
const { data: categories } = await useFetch<Category[]>('/api/categories')
const queriedProducts: Ref<Product[]> = ref([])

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

const query = ref("")

watch(query, async (newQuery) => {
    if(newQuery == "") return;
    const result = await useFetch<Product[]>(`/api/products/search?query=${newQuery}`)
    queriedProducts.value = result.data.value ?? []
})

</script>

<template>
    <div class="m-4">
        <NuxtLink to="/">
            <h2 class="font-black text-4xl mb-8 flex gap-4 align-middle">
                <ArrowLeftIcon class="w-8" />
                <span>Catálogo</span>
            </h2>
        </NuxtLink>
        <div class="flex gap-2 mb-8 border rounded-full bg-gray-100">
            <input type="text" class=" h-8 w-full p-2 rounded-full" placeholder="Buscar..." v-model="query">
            <button class="">
                <MagnifyingGlassIcon class="w-6 mr-2 text-gray-600" />
            </button>
        </div>
        <Transition appear name="slide-fade" mode="out-in">
            <div class="grid grid-cols-2 gap-2 md:grid-cols-4" v-if="!query">
                <NuxtLink :to="`/catalogue/${category.path}`" v-for="(category, index) in categories">
                    <div class="text-white aspect-square lg:aspect-auto rounded-lg p-2 flex flex-col justify-between transition-transform hover:scale-105"
                        :class="colors[index]">
                        <p class="text-2xl font-bold mb-2">{{ category.name }}</p>
                        <NuxtImg :src="images[index]" alt="" class="h-28" />
                    </div>
                </NuxtLink>
            </div>
            <div v-else>
                <div v-if="queriedProducts?.length != 0" class="grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
            <div v-for="product in queriedProducts" class="border rounded-lg flex justify-center p-2 flex-col text-center">
                <NuxtImg :src="product?.imageUrl" class="rounded-md object-scale-down my-2 basis-1/2 max-h-36" />
                <p>{{ product.name }}</p>
            </div>
        </div>
            </div>
        </Transition>
    </div>
</template>

<style scoped>
.slide-fade-enter-active {
    transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
    transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    transform: translateX(20px);
    opacity: 0;
}</style>