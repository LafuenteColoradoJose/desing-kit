<script>
    import { onMount } from 'svelte';
    import generateRandomColor from '../utils/colors/generateRandomColor';

    let color1 = generateRandomColor();
    let color2 = generateRandomColor();
    let color3 = generateRandomColor();
    let direction = "to right";
    let gradientCSS = "";

    function updateBaseColors() {
        color1 = generateRandomColor();
        color2 = generateRandomColor();
        color3 = generateRandomColor();
        generateGradient();
    }

    function generateGradient() {
        const colors = [color1, color2, color3].filter(color => color);
        gradientCSS = `linear-gradient(${direction}, ${colors.join(', ')})`;
    }

    function copyCSS() {
        navigator.clipboard.writeText(`background: ${gradientCSS};`);
        alert('Código CSS copiado al portapapeles');
    }

    function probarDegradado() {
        const div = document.createElement('div');
        div.style.cssText = `width: 100%; height: 100dvh; background: ${gradientCSS}; position: fixed; top: 0; left: 0; z-index: 9999;`;
        document.body.appendChild(div);
        setTimeout(() => document.body.removeChild(div), 3000);
    }

    onMount(generateGradient);
</script>

<div id="gradient" class="flex flex-col justify-center items-center gap-2 mb-4">
    <h1>Generador de Degradados</h1>
    <div class="flex flex-col justify-center items-center gap-2 md:flex-row">
        <button
			on:click={updateBaseColors}
			class="border-2 border-[#4d8fa5] rounded-2xl p-1 ">Colores Aleatorios</button
		>
        <label>
            Color 1:
            <input type="color" bind:value={color1}>
        </label>
        <br>
        <label>
            Color 2:
            <input type="color" bind:value={color2}>
        </label>
        <br>
        <label>
            Color 3:
            <input type="color" bind:value={color3}>
        </label>
    </div>

    <label>
        Dirección:
        <select bind:value={direction}>
            <option value="to right">A la derecha</option>
            <option value="to left">A la izquierda</option>
            <option value="to top">Hacia arriba</option>
            <option value="to bottom">Hacia abajo</option>
            <option value="to top right">Hacia arriba derecha</option>
            <option value="to top left">Hacia arriba izquierda</option>
            <option value="to bottom right">Hacia abajo derecha</option>
            <option value="to bottom left">Hacia abajo izquierda</option>
        </select>
    </label>
    <div class="flex flex-row justify-center items-center gap-2">
        <button on:click={generateGradient} class="border-2 border-[#4d8fa5] rounded-2xl p-1 ">Generar Degradado</button>
        <button on:click={probarDegradado} class="border-2 border-[#4d8fa5] rounded-2xl p-1 ">Probar Degradado</button>
    </div>
    <div class="w-2/3 h-24 md:h-28 lg:h-32"  style="background: {gradientCSS}"></div>
    <span class="text-center font-extralight mt-3" readonly>{`background: ${gradientCSS};`} </span>
    <button on:click={copyCSS} class="border-2 border-[#4d8fa5] rounded-2xl p-1 ">Copiar CSS</button>
</div>

<style>
    input, select {
        padding: 2px;
        margin: 5px;
    }
</style>

