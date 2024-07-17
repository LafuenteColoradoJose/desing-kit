<script>
	import GradientGenerator from '../../components/gradient-generator.svelte';
	import { fade } from 'svelte/transition';
</script>

<div in:fade={{ duration: 500 }}>
	<GradientGenerator />
</div>

<style>
</style>
