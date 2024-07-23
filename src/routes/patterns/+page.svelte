<script>
    import { fade } from "svelte/transition";
	import Backgrounds from "../../components/backgrounds.svelte";
</script>

<div in:fade={{ duration: 500 }} class="flex flex-col justify-between items-center w-full h-full">
	<Backgrounds />
</div>

<style>
</style>


