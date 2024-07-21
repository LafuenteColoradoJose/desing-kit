<script>
	import { fade } from 'svelte/transition';
</script>

<section in:fade={{ duration: 500 }} class="mt-4">
	<article class="flex flex-col justify-evenly items-center px-8 gap-6 md:px-12 lg:px-44">

		<div class="flex justify-center">
			<img class="w-auto h-12" src="/sveltekit.png" alt="svelte machine logo" />
		</div>

		<div class="flex flex-col justify-between items-center lg:flex-row">
                <div>
                    <h1>Proyecto de Diseño Visual</h1>
                    <p>Estamos aprendiendo Svelte y SvelteKit y lo usamos para crear unas sencillas herramientas de diseño web.</p>
                    <ul class="list-disc">
                        <li class="ml-3 lg:ml-5 ">Paletas de colores.</li>
                        <li class="ml-3 lg:ml-5 ">Degradados animados.</li>
                        <li class="ml-3 lg:ml-5 ">Fondos con patrones.</li>
                    </ul>
                    <p>Para colaborar o preguntar, contáctame. ¡Disfruta las herramientas!</p>
                </div>

			<div id="logoSvelteKit" class="w-8/12 h-auto md:w-6/12 lg:w-4/12">
				<img src="svelte-machine.png" alt="Svelte machine Logo" />
			</div>
		</div>

	</article>
</section>

<style>
</style>
