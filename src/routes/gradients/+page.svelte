<script>
	import { fade } from 'svelte/transition';
	import GradientGenerator from '../../components/gradient-generator.svelte';
</script>

<div in:fade={{ duration: 500 }}>
	<GradientGenerator />		 
</div>

<style>
</style>
