<script>
	// Supports weights 300-800
	import '@fontsource-variable/merriweather-sans';
	import '@fontsource/poppins';
</script>


<main>
    <nav class="flex flex-col">
        <a href="/">Home</a>
        <a href="/gradients">Degradados</a>
        <a href="/patterns">Backgrounds</a>
    </nav>

    <slot />

</main>

<style>

:global(h1, h2,h3,h4,h5,h6) {
    font-family: 'Merriweather Sans', sans-serif;
}

:global(p, a, span, label, input, select, button) {
    font-family: 'Poppins', sans-serif;
}

</style>





