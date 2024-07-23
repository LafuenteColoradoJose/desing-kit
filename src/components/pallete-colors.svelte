<script>
	import generateRandomColor from '../utils/colors/generateRandomColor.js';
	import hexToHsl from '../utils/colors/hexToHsl.js';
	import hslToHex from '../utils/colors/hslToHex.js';
	import hexToRgb from '../utils/colors/hexToRgb.js';

	let baseColor = generateRandomColor();
	let paletteType = 'monochrome';
	let palette = [];

	function generatePalette() {
		if (paletteType === 'monochrome') {
			palette = generateMonochromePalette(baseColor);
		} else if (paletteType === 'triadic') {
			palette = generateTriadicPalette(baseColor);
		}
	}

	function updateBaseColor() {
        baseColor = generateRandomColor();
        generatePalette();
    }

	function generateMonochromePalette(color) {
		let shades = [];
		for (let i = 0; i < 5; i++) {
			shades.push(lighten(color, i * 10));
		}
		return shades;
	}

	function generateTriadicPalette(color) {
		let triads = [];
		let color1 = shiftHue(color, 120);
		let color2 = shiftHue(color, 240);
		triads.push(color, color1, color2);
		return triads;
	}

	function lighten(color, percent) {
		// Función para aclarar el color
		let num = parseInt(color.slice(1), 16),
			amt = Math.round(2.55 * percent),
			R = (num >> 16) + amt,
			G = ((num >> 8) & 0x00ff) + amt,
			B = (num & 0x0000ff) + amt;

		return (
			'#' +
			(
				0x1000000 +
				(R < 255 ? (R < 1 ? 0 : R) : 255) * 0x10000 +
				(G < 255 ? (G < 1 ? 0 : G) : 255) * 0x100 +
				(B < 255 ? (B < 1 ? 0 : B) : 255)
			)
				.toString(16)
				.slice(1)
				.toUpperCase()
		);
	}

	function shiftHue(color, angle) {
		// Función para cambiar el tono del color
		let hsl = hexToHsl(color);
		hsl[0] = (hsl[0] + angle) % 360;
		return hslToHex(hsl);
	}
</script>

<div class="flex flex-col items-center gap-2 h-full sm:justify-center md:gap-10">
	<h1>Generador de Colores</h1>
	<div class="flex flex-col justify-center items-center gap-2 md:flex-row md:gap-3">
		
		<div class="flex flex-row items-center gap-2">
			<label for="baseColor"> Color base: </label>
			<input
				id="baseColor"
				type="color"
				bind:value={baseColor}
				style="border: 2px solid {baseColor};"
				class="border-2 rounded-2xl p-1.5 h-10 w-20"
			/>
		</div>
		<div class="flex flex-row items-center gap-2">
			<label for="paletteType"> Tipo de paleta: </label>
			<select
				id="paletteType"
				bind:value={paletteType}
				style="border: 2px solid {baseColor};"
				class="border-2 rounded-2xl p-1"
			>
				<option value="monochrome">Monocromática</option>
				<option value="triadic">Triádica</option>
			</select>
		</div>
		<div>
			<button
				on:click={generatePalette}
				style="border: 2px solid {baseColor};"
				class="border-2 rounded-2xl p-1">Generar Paleta</button
			>
			<button
				on:click={updateBaseColor}
				style="border: 2px solid {baseColor};"
				class="border-2 rounded-2xl p-1">Color Aleatorio</button
			>
		</div>
	</div>

	<div style="border: 2px solid {baseColor};" class="flex flex-col justify-center items-center p-3 rounded-2xl w-[82dvw] h-[40dvh]">
		{#each palette as color}
			<div class="color w-[70dvw] h-[2dvh] m-2 px-4" style="background-color: {color};"></div>
			<div class="flex flex-row">
				<span class="text-base">
					{color} <br />
				</span>
				<span class="text-sm">
					{hexToRgb(color)}
				</span>
			</div>
		{/each}
	</div>

</div>

<style>
	.color {
		margin: 10px;
		padding-left: 10px;
		border: 2px solid #333;
		border-radius: 4px;
	}
	
</style>
