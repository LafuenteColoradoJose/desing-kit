<script>
	// Supports weights 300-800
	import '@fontsource-variable/merriweather-sans';
	import '@fontsource/poppins';
    import NavBar from '../components/nav-bar.svelte';
    import MdBuild from 'svelte-icons/md/MdBuild.svelte';
    import '../app.css';
	import Footer from '../components/footer.svelte';
</script>

<header>
    <div class="flex flex-row justify-center items-center bg-[#b2e5f5] gap-2">
        <div class='icon'>
            <MdBuild />
        </div>
        <h1>Desing Kit</h1>
    </div>
    <NavBar />
</header>


<main>
   

    <slot />

</main>
<Footer />

<style>

:global(h1,h2,h3,h4,h5,h6) {
    font-family: 'Merriweather Sans', sans-serif;
    color : #4d8fa5;
    font-weight: 800;
    font-size: x-large;
    
}

:global(p, a, span, label, input, select, button) {
    font-family: 'Poppins', sans-serif;
}

:global(body) {
   
    width: 100%;
    height: fit-content;
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
    background-color: #f5f5f5;
}

:global(.icon) {
    width: 24px;
    height: 24px;
    color: #4d8fa5;
    
}

</style>





