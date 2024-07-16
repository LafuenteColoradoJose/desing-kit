<script>
    import { onMount } from 'svelte';

    let color1 = "#3498db";
    let color2 = "#ffffff";
    let color3 = "#000000";
    let direction = "to right";
    let gradientCSS = "";

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

    // Generar el degradado inicial al cargar la página
    onMount(generateGradient);
</script>

<div id="gradient">
    <h1>Generador de Degradados</h1>
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
    <br>
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
    <br>
    <button on:click={generateGradient}>Generar Degradado</button>
    <br>
    <button on:click={probarDegradado}>Probar Degradado</button>
    <div id="gradientPreview" style="background: {gradientCSS}"></div>
    <textarea id="cssCode" readonly>{`background: ${gradientCSS};`}</textarea>
    <button on:click={copyCSS}>Copiar CSS</button>
</div>

<style>
    #gradient {
        
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 10px;
        text-align: center;
        background: aliceblue;
        
    }

    #gradientPreview {
        width: 100%;
        height: 150px;
        margin-top: 20px;
        border: 1px solid #ccc;
    }

    #cssCode {
        width: 60%;
        height: 100px;
        margin-top: 10px;
    }

    button {
        margin-top: 10px;
        padding: 10px 20px;
        background: #3498db;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }

    input, select {
        padding: 2px;
        margin: 5px;
    }
</style>

