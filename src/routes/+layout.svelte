<script>
	// Supports weights 300-800
	import '@fontsource-variable/merriweather-sans';
	import '@fontsource/poppins';
    import NavBar from '../components/nav-bar.svelte';
</script>

<header>
    <h1>Desing Kit</h1>
    <NavBar />
</header>

<main>
   

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





