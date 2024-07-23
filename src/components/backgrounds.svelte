<script>
	import { svgDataUrl } from '../stores.js';
	import generateRandomColor from '../utils/colors/generateRandomColor';
	import {
		generateStripesPattern,
		generateDotsPattern,
		generateTrianglesPattern,
		generateHexagonsPattern,
		generateWavesPattern,
		generateDiagonalLinesPattern
	} from '../utils/patterns/svgPatterns';

	let opaccity = 0.8;
	let baseColor = generateRandomColor();
	// let rgbaColor = `rgba(${parseInt(baseColor.slice(1, 3), 16)}, ${parseInt(baseColor.slice(3, 5), 16)}, ${parseInt(baseColor.slice(5, 7), 16)}, ${opaccity})`;
	let pattern = 'stripes';
	let width = 1280;
	let height = 720;

	let svgDataUrl_value;

	svgDataUrl.subscribe((url) => {
		svgDataUrl_value = url;
	});
	// console.log(svgDataUrl_value);

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

<div
	id="preview"
	class="flex flex-col justify-start w-full h-full"
	style="background-image: url({svgDataUrl_value})"
>
	<div
		id="form"
		class="flex flex-col justify-center items-center gap-2 border-2 px-8 rounded-xl mt-4 mx-8 py-4"
	>
		<h1>Generador de Fondos</h1>

		<div class="flex flex-col justify-center items-center gap-2 md:flex-row">
			<label>
				Color base:
				<input type="color" bind:value={baseColor} />
			</label>
			<button
				on:click={updateBaseColor}
				style="border: 2px solid {baseColor};"
				class="rounded-2xl p-1 shadow-xl">Color Aleatorio</button
			>
			<div class="flex flex-col justify-start items-center"></div>
			<label for="patterns"> Patrón: </label>
			<select
				id="patterns"
				bind:value={pattern}
				style="border: 2px solid {baseColor};"
				class="rounded-2xl p-1 shadow-xl"
			>
				<option value="stripes">Rayas</option>
				<option value="dots">Puntos</option>
				<option value="triangles">Triángulos</option>
				<option value="hexagons">Hexágonos</option>
				<option value="waves">Olas</option>
				<option value="diagonalLines">Líneas Diagonales</option>
			</select>
		</div>
		<div class="flex flex-col justify-center items-center gap-2 md:flex-row">
			<div class="flex flex-col justify-start items-center">
				<label for="width"> Ancho: </label>
				<input
					id="width"
					style="border: 2px solid {baseColor};"
					class="rounded-2xl p-1 shadow-xl w-3/4"
					type="number"
					bind:value={width}
					min="1"
				/>
			</div>
			<div class="flex flex-col justify-start items-center">
				<label laber for="height"> Alto: </label>
				<input
					id="height"
					style="border: 2px solid {baseColor};"
					class="rounded-2xl p-1 shadow-xl w-3/4"
					type="number"
					bind:value={height}
					min="1"
				/>
			</div>
		</div>
		<button
			style="border: 2px solid {baseColor};"
			class="rounded-2xl p-1 shadow-xl"
			on:click={generateSvg}>Generar Background</button
		>

		<div style="border: 2px solid {baseColor};" class="rounded-2xl p-1 shadow-xl px-2 w-fit">
			<a href={$svgDataUrl} download="background.svg">Descargar SVG</a>
		</div>
	</div>
</div>

<style>
	#preview {
		background-size: cover;
		background-position: center;
		background-repeat: repeat;
	}

	#form {
		background: rgba(255, 255, 255, 0.33);
		border-radius: 16px;
		box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
		backdrop-filter: blur(1.1px);
		-webkit-backdrop-filter: blur(1.1px);
	}
</style>
