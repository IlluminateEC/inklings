<script lang="ts">
	import { generate_material_theme } from '$lib/material/theme/generator';
	import StaticTheme from '$lib/material/theme/StaticTheme.svelte';
	import Navigation from '$lib/Navigation.svelte';
</script>

<StaticTheme
	material_theme={generate_material_theme('#00ffcc', '#ff0033', '#ee5500')}
	contrast={'system'}
	brightness={'system'}
/>

<div style="display: flex; flex-direction: row; flex-grow: 1; justify-content: stretch;">
	<Navigation />
	<div
		style="display: flex; gap: 24px; margin: 24px; border-radius: 24px; margin-left: 8px; flex-grow: 1;"
	>
		<slot></slot>
	</div>
</div>

<style>
	:root {
		font-family: Roboto, system-ui;
		background-color: var(--md-sys-color-surface);
		color: var(--md-sys-color-on-surface);
	}

	:global(a, a:visited) {
		color: var(--md-sys-color-tertiary);
	}

	:root {
		display: flex;
		flex-direction: column;
		height: 100%;
	}

	:global(body) {
		display: flex;
		flex-direction: row;
		flex-grow: 1;
		align-items: stretch;
		height: -webkit-fill-available;
		height: -moz-available;
	}
</style>
