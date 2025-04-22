<script lang="ts">
	import { goto } from '$app/navigation';
	import FAB from '$lib/material/button/FAB.svelte';
</script>

awawi :3

<div style="position: fixed; right: 16px; bottom: 16px; display: flex;">
	<FAB
		icon={'edit'}
		label={'Create new Inkling'}
		color={'tertiary'}
		on:click={() => goto('/inkling/new')}
	/>
</div>

<style>
	.thingy {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		justify-content: stretch;
		gap: 8px;
		--size: 200px;
		margin-bottom: 8px;
	}
</style>
