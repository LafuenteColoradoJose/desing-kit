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
        }

        const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">${svgContent}</svg>`;
        const svgBlob = new Blob([svg], { type: 'image/svg+xml' });
        const url = URL.createObjectURL(svgBlob);
        svgDataUrl.set(url);
    }

    function generateStripesPattern(color, width, height) {
        return `
            <rect width="${width}" height="${height}" fill="${color}" />
            <path d="M0 0 L${width} ${height} M${width} 0 L0 ${height}" stroke="white" stroke-width="10" />
        `;
    }

    function generateDotsPattern(color, width, height) {
        let pattern = '';
        for (let y = 0; y < height; y += 50) {
            for (let x = 0; x < width; x += 50) {
                pattern += `<circle cx="${x}" cy="${y}" r="20" fill="white" />`;
            }
        }
        return `<rect width="${width}" height="${height}" fill="${color}" />${pattern}`;
    }

    $: generateSvg();
</script>

<style>
    .preview {
        width: 100%;
        max-width: 800px;
        height: auto;
        margin: 20px 0;
        border: 1px solid #ddd;
    }
</style>

<div>
    <label>
        Color base: 
        <input type="color" bind:value={baseColor}>
    </label>
    <label>
        Patrón: 
        <select bind:value={pattern}>
            <option value="stripes">Rayas</option>
            <option value="dots">Puntos</option>
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
    <button on:click={generateSvg}>Generar Background</button>
</div>

<div class="preview">
    <img src={$svgDataUrl} alt="Background Preview">
</div>

<div>
    <a href={$svgDataUrl} download="background.svg">Descargar SVG</a>
</div>
