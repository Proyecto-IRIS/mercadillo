<script setup lang="ts">
import { ArrowRightIcon } from '@heroicons/vue/24/outline'
</script>
<template>
    <div class="sticky top-0 bg-base-100 flex w-full py-2 m-0 gap-2 justify-center z-50">
        <NuxtImg src="/rosi.png" alt="" class="w-24 object-scale-down" />
        <NuxtImg src="/bi.png" alt="" class="w-16 object-scale-down" />
    </div>
    <div class="hero min-h-screen bg-base-200"
        style="background-image: url(https://images.unsplash.com/photo-1597668900045-b9283c0de174?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D);">
        <div class="hero-overlay bg-opacity-60"></div>
        <div class="hero-content text-center">
            <div class="max-w-md text-white">
                <h1 class="text-5xl font-bold">II Mercado solidario de Nadal</h1>
                <p class="py-6">Organizado polo alumnado do IES Rosalía de Castro</p>
                <NuxtLink to="#content">
                    <button class="btn bg-green-400 border-0 text-white">Multipliquemos a ilusión!</button>
                </NuxtLink>
            </div>
            <span id="content" class="mt-auto absolute bottom-0"></span>
        </div>
    </div>
    <div class="px-4 relative -top-16 z-49 rounded-t-3xl bg-white pt-16 text-xl lg:grid lg:grid-cols-2 gap-2">
        <div class="mb-16 lg:border lg:mb-0 lg:p-4 rounded-box">
            <h2 class="text-4xl font-bold mb-6">Pequenas xoias...</h2>
            <p>No mercadillo solidario venderanse toda clase de artigos listos para recibir unha nova vida.</p>
            <NuxtLink to="/catalogue"
                class="rounded-md text-xl font-medium flex align-middle gap-2 hover:gap-4 hover:-rotate-3 hover:scale-110 transition-all bg-green-400 w-max p-3 text-white mt-8 lg:mt-16">
                Ir ao catálogo
                <ArrowRightIcon class="w-8" />
            </NuxtLink>
        </div>
        <div class="mb-16 lg:border lg:mb-0 lg:p-4 rounded-box">
            <h2 class="text-4xl font-bold mb-6">...e grandes actividades...</h2>
            <p class="mb-6">O mercado, ademais, constará de actividades do máis variopintas, aseguradas para facerche pasar
                un gran rato:</p>
            <ActivitiesCarousel />
        </div>
        <div class="mb-16 lg:border lg:mb-0 lg:p-4 rounded-box">
            <h2 class="text-4xl font-bold mb-6">...por unha causa maior!</h2>
            <p>Todo o diñeiro recaudado será donado ao noso colaborador:</p>

            <NuxtImg src="/CRE-ES-Horizontal-RGB.png" alt="" class="mt-10 max-w-md w-full mx-auto" />
        </div>
        <div class="mb-16 lg:border lg:mb-0 lg:p-4 rounded-box">
            <p class="text-4xl font-bold mb-6">Anímate!</p>
            <p class="mb-6">Ven visitarnos o 20 de decembro, e disfruta desta preciosa oportunidade para axudar aos máis
                necesitados connosco!</p>
            <ClientOnly>
                <Countdown class="mx-auto" />
            </ClientOnly>
        </div>
    </div>
    <div class="footer p-8 bg-neutral text-neutral-content">
        <div>
            <p class="footer-title">Es ti   unha empresa?</p>
            <p>Animámoste a crear un <span class="italic">stand</span> no que poidas presentar os teus propios produtos!
                Simplemente contacta connosco en <NuxtLink class="font-bold" to="mailto:mercadillosolidario@iesrosaliadecastro.org">mercadillosolidario@iesrosaliadecastro.org</NuxtLink> e farémosche un espazo! 
                <br> A única condición? A doazón do 10% das ganancias dese día.
            </p>
        </div>
        <div>
            <p class="footer-title">Social</p>
            <NuxtLink to="https://www.instagram.com/mercarosy/" target="_blank">
                <InstagramIcon class="w-6"></InstagramIcon>
            </NuxtLink>
        </div>
    </div>
</template>

<style scoped>
html {
    scroll-behavior: smooth;
}</style>