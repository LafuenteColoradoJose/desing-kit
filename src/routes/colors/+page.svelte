<script>
    import PalleteColors from '../../components/pallete-colors.svelte';
    import { fade } from 'svelte/transition';
</script>

<div in:fade={{ duration: 500 }} >
    <PalleteColors />
</div>

<style>

</style>


