<template>
    <div class="absolute lg:w-1/2 xl:w-1/3 z-50 xl:top-1/2 -translate-y-1/2 lg:left-16 lg:rounded-xl shadow-lg bg-base-100 md:overflow-hidden h-screen md:h-auto">
        <h1 class="font-black text-4xl bg-sky-100 p-8 text-center lg:text-left">Mercadillo solidario</h1>
        <div class="p-8 text-justify">
            <p>
                ¡El IES Rosalía de Castro presenta su <b>Mercadillo Solidario</b> navideño! Estamos emocionados de invitarles a participar en este evento el día 20 de diciembre, donde podrán disfrutar de fantástica música y comida, junto con la posibilidad de apoyar a una causa mayor.
            </p>
            <br>
            <p>
                El <b>100%</b> del dinero recaudado será donado a la <a href="https://cruzvermella.gal/?lang=es" class="underline decoration-dashed">Cruz Roja</a>.
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente autem unde placeat voluptate, nulla perferendis nam saepe modi, in dolorum obcaecati quaerat repellat quia minus iusto voluptatum nihil officiis molestias.
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi placeat animi consectetur provident autem facilis, nam cumque. Cumque nemo, dicta cupiditate modi harum, autem sapiente numquam, nam voluptatibus veniam adipisci.
            </p>
            <div class="flex mt-8 gap-8 flex-col md:flex-col">
                <NuxtLink to="/catalogue" class="rounded-md text-xl font-medium flex gap-2 hover:gap-4 hover:-rotate-3 hover:scale-110 transition-all bg-blue-300 w-max p-3 text-white">
                    <span class="underline decoration-dashed w-max">Ir al catálogo</span> 🡢
                </NuxtLink>
            </div>
        </div>
    </div>
    <img class="brightness-75 w-full h-screen object-cover absolute top-0" src="https://images.unsplash.com/photo-1597668900045-b9283c0de174?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="">
</template>