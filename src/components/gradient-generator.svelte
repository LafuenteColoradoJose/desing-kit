<script>
	import generateRandomColor from '../utils/colors/generateRandomColor';
	import Swal from 'sweetalert2';

	let color1 = generateRandomColor();
	let color2 = generateRandomColor();
	let color3 = generateRandomColor();
	let color4 = generateRandomColor();

	let colors = [color1, color2, color3, color4];
	let deg = 45;
	let getCss = false;
	let getTryGradient = false;

	let background = `linear-gradient(${deg}deg, ${colors[0]}, ${colors[1]}, ${colors[2]}, ${colors[3]})`;

	// 	Convert deg number to string for CSS
	$: degString = `${deg}deg`;

	function randomColors() {
		colors = colors.map(() => generateRandomColor());
	}

	function generateCss() {
		return `
            #gradientAnimation {
                margin: 10px;
                width: 200px;
                height: 200px;
                border: 2px solid black;
                background: linear-gradient(
                    ${deg}deg,
                    ${colors[0]},
                    ${colors[1]},
                    ${colors[2]},
                    ${colors[3]}
                );
                background-size: 200% 200%;
                animation: zoomGradient 15s ease infinite;
            }

            @keyframes zoomGradient {
                0%, 100% {
                    background-size: 200% 200%;
                }
                50% {
                    background-size: 100% 100%;
                }
            }
        `;
	}

	function copyToClipboard() {
		const cssCode = generateCss();
		navigator.clipboard.writeText(cssCode).then(
			() => {
				getCss = true;
				Swal.fire({
					title: 'CSS Copiado',
					text: 'El código CSS ha sido copiado al portapapeles',
					text: `${cssCode}`,
					icon: 'success',
					confirmButtonText: 'Ok'
				});
			},
			(err) => {
				alert('Error al copiar CSS: ', err);
			}
		);
	}

	
</script>

<div id="gradientAnimation"
 style="
--deg: {degString};
--gradient-1:{colors[0]};
--gradient-2:{colors[1]};
--gradient-3:{colors[2]};
--gradient-4:{colors[3]};"

 class="flex flex-col justify-center items-center gap-2 pb-4 h-screen">
	<h1 >Generador de Degradados</h1>
	<button on:click={randomColors} class="border-2 border-[#4d8fa5] rounded-2xl p-1"
		>Colores Aleatorios</button
	>
	<label for="color-1">Color 1</label>
	<input name="color-1" type="color" bind:value={colors[0]} />

	<label for="color-2">Color 2</label>
	<input name="color-2" type="color" bind:value={colors[1]} />

	<label for="color-3">Color 3</label>
	<input name="color-3" type="color" bind:value={colors[2]} />

	<label for="color-4">Color 4</label>
	<input name="color-4" type="color" bind:value={colors[3]} />

	<label for="degrees">Degrees: {deg}</label>
	<input name="degrees" type="range" min="0" max="360" bind:value={deg} />



	<button on:click={copyToClipboard} class="border-2 border-[#4d8fa5] rounded-2xl p-1"
		>Copiar CSS</button
	>
	
</div>

<style>

    h1 {
        text-shadow: 0.5px 1px 1px white;
    }

	#gradientAnimation {
		border: 2px solid black;
		background: linear-gradient(
			var(--deg),
			var(--gradient-1),
			var(--gradient-2),
			var(--gradient-3),
			var(--gradient-4)
		);
		background-size: 200% 200%;
		animation: zoomGradient 15s ease infinite;
	}

	@keyframes zoomGradient {
		0%,
		100% {
			background-size: 200% 200%;
		}
		50% {
			background-size: 100% 100%;
		}
	}
</style>
