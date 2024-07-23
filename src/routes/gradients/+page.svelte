<script>
	import { fade } from 'svelte/transition';
	import GradientGenerator from '../../components/gradient-generator.svelte';
</script>

<div in:fade={{ duration: 500 }} class="flex flex-col justify-between items-center w-full h-full">
	<GradientGenerator />		 
</div>

<style>
</style>
