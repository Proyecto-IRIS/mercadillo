<script setup lang="ts">
import { Product } from '~/types';

const props = defineProps<{
    products: Product[] | null | undefined
}>()

</script>

<template>
    <div class="">
        <div class="carousel carousel-center space-x-2" v-if="props.products?.length">
            <!-- <ProductCard v-if="products" v-for="product in products.value" class="carousel-item" :product="product" /> -->
            <div class="border rounded-lg overflow-hidden flex items-center flex-col gap-2 shadow p-2 carousel-item"
                v-for="product in props.products">
                <div v-if="(typeof product != 'boolean')">
                    <!--PRODUCT IMAGE-->
                    <NuxtImg :src="product?.imageUrl" class="rounded-md object-scale-down my-2 basis-1/2 max-h-36" />
                    <!--PRODUCT DATA-->
                    <div class="flex items-center gap-2 flex-col w-full h-full pt-1 basis-1/2">
                        <p class="text-center text-lg">{{ product?.name }}</p>
                    </div>
                </div>
            </div>
        </div>
        <div v-else class="text-center pt-4 text-lg text-gray-500">
            Nada por aquí... 😢
        </div>
    </div>
</template>