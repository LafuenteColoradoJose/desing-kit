<script>
	import { writable } from 'svelte/store';
	import generateRandomColor from '../utils/colors/generateRandomColor';
    import { 
        generateStripesPattern, 
        generateDotsPattern, 
        generateTrianglesPattern, 
        generateHexagonsPattern, 
        generateWavesPattern,
        generateDiagonalLinesPattern
     } from '../utils/patterns/svgPatterns';

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
		} else if (pattern === 'hexagons') {
            svgContent = generateHexagonsPattern(baseColor, width, height);
        } else if (pattern === 'waves') {
            svgContent = generateWavesPattern(baseColor, width, height);
        } else {
            svgContent = generateDiagonalLinesPattern(baseColor, width, height);
        }

		const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">${svgContent}</svg>`;
		const svgBlob = new Blob([svg], { type: 'image/svg+xml' });
		const url = URL.createObjectURL(svgBlob);
		svgDataUrl.set(url);
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
		<input type="color" bind:value={baseColor} />
	</label>
	<button
		on:click={updateBaseColor}
		style="border: 2px solid {baseColor};"
		class="border-2 rounded-2xl p-1">Color Aleatorio</button
	>
	<label>
		Patrón:
		<select
			bind:value={pattern}
			style="border: 2px solid {baseColor};"
			class="border-2 rounded-2xl p-1"
		>
			<option value="stripes">Rayas</option>
			<option value="dots">Puntos</option>
			<option value="triangles">Triángulos</option>
			<option value="hexagons">Hexágonos</option>
            <option value="waves">Olas</option>
            <option value="diagonalLines">Líneas Diagonales</option>
		</select>
	</label>
	<label>
		Ancho:
		<input
			style="border: 2px solid {baseColor};"
			class="border-2 rounded-2xl p-1"
			type="number"
			bind:value={width}
			min="1"
		/>
	</label>
	<label>
		Alto:
		<input
			style="border: 2px solid {baseColor};"
			class="border-2 rounded-2xl p-1"
			type="number"
			bind:value={height}
			min="1"
		/>
	</label>
	<button
		style="border: 2px solid {baseColor};"
		class="border-2 rounded-2xl p-1"
		on:click={generateSvg}>Generar Background</button
	>
	<div class="preview">
		<img src={$svgDataUrl} alt="Background Preview" />
	</div>

	<div style="border: 2px solid {baseColor};" class="border-2 rounded-2xl p-1 px-2 w-fit">
		<a href={$svgDataUrl} download="background.svg">Descargar SVG</a>
	</div>
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
