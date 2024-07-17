<script>
    import { fade } from 'svelte/transition';
</script>

<section in:fade={{ duration: 500 }} class="mt-4">
    <article class="flex flex-col justify-between items-center px-8 md:px-12 lg:px-24">

        <div class="flex justify-center">
            <img class="w-auto h-12" src="/sveltekit.png" alt="svelte machine logo">
        </div>

        <div class="flex flex-col justify-center items-center lg:flex-row">

            <div id=Text>
    
                <h1>Bienvenidos al Proyecto de Generación de Diseños Visuales</h1>
            
                <p>Este proyecto utiliza Svelte y SvelteKit para crear herramientas que permiten generar paletas de colores monocromáticas o triádicas, degradados animados y fondos con patrones fijos.</p>
                
                <h2>Características Principales:</h2>
                
                <ul>
                    <li>Generación de paletas de colores personalizadas.</li>
                    <li>Creación de degradados animados para diseños dinámicos.</li>
                    <li>Personalización de fondos utilizando patrones fijos.</li>
                </ul>
                
                <h2>Propósito y Utilidad:</h2>
                
                <p>Este proyecto ha sido utilizado para aprender Svelte y SvelteKit.</p>
                
                <h2>Comunidad y Contribución:</h2>
                
                <p>Me entusiasma compartir mi conocimiento y aprender de la comunidad. Si tienes preguntas, sugerencias o deseas colaborar, no dudes en contactar conmigo. ¡Espero que disfrutes utilizando estas herramientas tanto como yo he  disfrutado desarrollándolas!</p>
            </div>
    
            <div id=logoSvelteKit class="w-8/12 lg:w-fit">
                <img src="svelte-machine.png" alt="Svelte machine Logo">
            </div>
        </div>
</section>

<style>

</style>



