<script lang="ts" setup>
import { useNow } from '@vueuse/core'

const now = useNow()
const mercadilloTime = new Date("Dec 20, 2023 16:30:00").getTime()

const timeUntilMercadillo = computed(() => {
    const nowTime = now.value.getTime()
    const timeLeft = mercadilloTime - nowTime

    const result = {
        total: timeLeft,
        days: Math.floor(timeLeft / (1000 * 60 * 60 * 24)),
        hours: Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((timeLeft % (1000 * 60)) / 1000),
    }

    return result
})
</script>
<template>
    <div class="grid grid-flow-col gap-5 text-center auto-cols-max w-max" v-if="timeUntilMercadillo.total > 0">
        <div class="flex flex-col p-2 bg-green-400 rounded-box text-white">
            <span class="countdown font-mono text-5xl">
                <span :style="`--value:${timeUntilMercadillo.days};`"></span>
            </span>
            días
        </div>
        <div class="flex flex-col p-2 bg-green-400 rounded-box text-white">
            <span class="countdown font-mono text-5xl">
                <span :style="`--value:${timeUntilMercadillo.hours};`"></span>
            </span>
            horas
        </div>
        <div class="flex flex-col p-2 bg-green-400 rounded-box text-white">
            <span class="countdown font-mono text-5xl">
                <span :style="`--value:${timeUntilMercadillo.minutes};`"></span>
            </span>
            min
        </div>
        <div class="flex flex-col p-2 bg-green-400 rounded-box text-white">
            <span class="countdown font-mono text-5xl">
                <span :style="`--value:${timeUntilMercadillo.seconds};`"></span>
            </span>
            segs
        </div>
    </div>
    <div v-else class="font-bold text-center bg-neutral text-neutral-200 rounded-box p-3">
        Grazas pola participación! Vémonos o ano que ven! 🥳
    </div>
</template>