<script lang="ts">
	// import { page } from '$app/state';
	import { generate_material_theme } from '$lib/material/theme/generator';
	import StaticTheme from '$lib/material/theme/StaticTheme.svelte';
	// import material_theme from '$lib/../data/material-theme.json';
	// import { locales, localizeHref } from '$lib/paraglide/runtime';
</script>

<StaticTheme
	material_theme={generate_material_theme('#B88C1F', '#c0ffee', '#ee5500')}
	contrast={'system'}
	brightness={'system'}
/>

<slot></slot>

<!-- <div style="display: none;">
	{#each locales as locale}
		<a href={localizeHref(page.url.pathname, { locale })}>{locale}</a>
	{/each}
</div> -->

<style>
	:root {
		font-family: Roboto, system-ui;
		background-color: var(--md-sys-color-surface);
		color: var(--md-sys-color-on-surface);
	}

	:global(a, a:visited) {
		color: var(--md-sys-color-tertiary);
	}
</style>
