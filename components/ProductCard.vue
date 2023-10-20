<script setup lang="ts">
import { Stripe } from 'stripe';
import { ShoppingBagIcon } from '@heroicons/vue/24/outline'

const props = defineProps<{
    product: Stripe.Product
}>()

 async function createCheckout() {
    const link = await $fetch('/api/checkout', {
        method: 'POST',
        body: {
            price: (props.product.default_price as Stripe.Price).id
        }
    })

    if (!link) return;

    navigateTo(link, {
        external: true
    })
}

</script>

<template>
    <div class="border rounded-lg overflow-hidden flex items-center flex-col gap-2 shadow">
        <!--PRODUCT IMAGE-->
        <img :src="$props.product?.images[0]" class="rounded-md object-scale-down my-2 basis-1/2 max-h-36">
        <!--PRODUCT DATA-->
        <div class="flex items-center gap-2 flex-col bg-yellow-50 w-full h-full pt-1 basis-1/2">
            <p class="text-center text-lg font-bold">{{ $props.product?.name }}</p>
            <p class="text-center" v-if="$props.product?.default_price">
                {{ (parseInt(($props.product?.default_price as Stripe.Price).unit_amount_decimal ?? "") / 100).toFixed(2) }}
                €
            </p>
            <button class="btn btn-sm bg-amber-400 text-white rounded-md shadow-sm shadow-slate-400 flex items-center px-2 mb-2" @click="createCheckout()">
                <ShoppingBagIcon class="h-4" />
                <span class="mx-auto">Reservar</span>
            </button>
        </div>
    </div>
</template>
