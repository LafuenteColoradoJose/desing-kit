<script>
    import PalleteColors from '../../components/pallete-colors.svelte';
    import { fade } from 'svelte/transition';
</script>

<div in:fade={{ duration: 500 }} class="flex flex-col justify-between items-center w-full h-full" >
    <PalleteColors />
</div>

<style>

</style>


