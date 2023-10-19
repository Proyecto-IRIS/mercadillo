<script setup lang="ts">
import { Stripe } from 'stripe';

const props = defineProps<{
    product: Stripe.Product
}>()

</script>

<template>
    <div class="border rounded-lg overflow-hidden grid grid-cols-2">
        <!--PRODUCT IMAGE-->
        <img :src="$props.product.images[0]" class="h-48 rounded-md object-scale-down">
        
        <!--PRODUCT DATA-->
        <div class="">
            <p class="text-center text-lg font-bold">{{ $props.product.name }}</p>
            <p class="text-center" v-if="$props.product.default_price">
                {{ (parseInt(($props.product.default_price as Stripe.Price).unit_amount_decimal ?? "") / 100).toFixed(2) }}
                €
            </p>
        </div>

    </div>
</template>
