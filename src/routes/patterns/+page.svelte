<script>
    import { fade } from "svelte/transition";
	import Backgrounds from "../../components/backgrounds.svelte";
</script>

<div in:fade={{ duration: 500 }}>
	<Backgrounds />
</div>

<style>
</style>


