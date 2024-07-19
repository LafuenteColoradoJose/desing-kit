<script>
    import { writable } from 'svelte/store';
    import generateRandomColor from '../utils/colors/generateRandomColor';

    let baseColor = generateRandomColor();
    let pattern = 'stripes';
    let width = 800;
    let height = 600;

    let svgDataUrl = writable('');

    function generateSvg() {
        let svgContent;
        if (pattern === 'stripes') {
            svgContent = generateStripesPattern(baseColor, width, height);
        } else if (pattern === 'dots') {
            svgContent = generateDotsPattern(baseColor, width, height);
        } else if (pattern === 'triangles') {
            svgContent = generateTrianglesPattern(baseColor, width, height);
        }

        const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">${svgContent}</svg>`;
        const svgBlob = new Blob([svg], { type: 'image/svg+xml' });
        const url = URL.createObjectURL(svgBlob);
        svgDataUrl.set(url);
    }

    function generateStripesPattern(color, width, height) {
        let pattern = '';
        for (let x = 0; x < width; x += 50) {
            pattern += `<path d="M${x} 0 L${x} ${height}" stroke="white" stroke-width="1" />`;
        }
        for (let y = 0; y < height; y += 50) {
            pattern += `<path d="M0 ${y} L${width} ${y}" stroke="white" stroke-width="1" />`;
        }
        return `
            <rect width="${width}" height="${height}" fill="${color}" />
            ${pattern}
        `;
    }

    function generateDotsPattern(color, width, height) {
        let pattern = '';
        for (let y = 0; y < height; y += 50) {
            for (let x = 0; x < width; x += 50) {
                pattern += `<circle cx="${x}" cy="${y}" r="5" fill="white" />`;
            }
        }
        return `<rect width="${width}" height="${height}" fill="${color}" />${pattern}`;
    }

    function generateTrianglesPattern(color, width, height) {
        let pattern = '';
        for (let y = 0; y < height; y += 50) {
            for (let x = 0; x < width; x += 50) {
                pattern += `
                    <polygon points="${x},${y} ${x + 50},${y} ${x},${y + 50}" fill="${color}" />
                    <polygon points="${x + 50},${y} ${x + 50},${y + 50} ${x},${y + 50}" fill="white" />
                `;
            }
        }
        return `<rect width="${width}" height="${height}" fill="${color}" />${pattern}`;
    }

    function updateBaseColor() {
        baseColor = generateRandomColor();
        generateSvg();
    }

    $: generateSvg();
</script>

<div class="flex flex-col justify-center items-center gap-2">
    <h1 class="text-center">Generador de Fondos</h1>
    <label>
        Color base: 
        <input type="color" bind:value={baseColor}>
    </label>
    <button
    on:click={updateBaseColor}
    style="border: 2px solid {baseColor};"
    class="border-2 rounded-2xl p-1">Color Aleatorio</button
    >
    <label>
        Patrón: 
        <select bind:value={pattern}>
            <option value="stripes">Rayas</option>
            <option value="dots">Puntos</option>
            <option value="triangles">Triángulos</option>
        </select>
    </label>
    <label>
        Ancho: 
        <input type="number" bind:value={width} min="1">
    </label>
    <label>
        Alto: 
        <input type="number" bind:value={height} min="1">
    </label>
    <button style="border: 2px solid {baseColor};"
    class="border-2 rounded-2xl p-1" on:click={generateSvg}>Generar Background</button>
</div>

<div class="preview">
    <img src={$svgDataUrl} alt="Background Preview">
</div>

<div>
    <a href={$svgDataUrl} download="background.svg">Descargar SVG</a>
</div>
    
    <style>
        .preview {
            width: 100%;
            max-width: 800px;
            height: auto;
            margin: 20px 0;
            border: 1px solid #ddd;
        }
    </style>
