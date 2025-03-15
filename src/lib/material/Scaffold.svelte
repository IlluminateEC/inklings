<script lang="ts">
	import type { Component } from 'svelte';

	let navigation_drawer: Component | undefined;
	let end_drawer: Component | undefined;

	type SizeClass = 'compact' | 'medium' | 'expanded' | 'large' | 'extra-large';
	type NavigationMode = 'bar' | 'rail' | 'drawer' | 'modal-drawer';

	let default_modes: {
		compact?: NavigationMode;
		medium?: NavigationMode;
		expanded?: NavigationMode;
		large?: NavigationMode;
		'extra-large'?: NavigationMode;
	} = {
		compact: 'bar',
		medium: 'rail',
		expanded: 'rail',
		large: 'drawer',
		'extra-large': 'drawer'
	};
	export let navigation_modes: {
		compact?: NavigationMode;
		medium?: NavigationMode;
		expanded?: NavigationMode;
		large?: NavigationMode;
		'extra-large'?: NavigationMode;
	} = default_modes;
	export let title: string;

	export function toggle_drawer(side: 'side' | 'all' | 'navigation') {}

	function get_classes(mode: NavigationMode): string {
		return (
			Object.entries(navigation_modes)
				.filter((entry) => entry[1] == mode)
				.map((entry) => entry[0])
				.join(' ') +
			' ' +
			mode
		);
	}
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<main>
	<slot />

	<!-- Bar -->
	<nav class={get_classes('bar')}></nav>
	<!-- Rail -->
	<nav class={get_classes('rail')}></nav>
	<!-- Drawer -->
	<nav class={get_classes('drawer')}></nav>
	<!-- Modal drawer -->
	<nav class={get_classes('modal-drawer')}></nav>
</main>

<style>
	@media (max-width: calc(var(--window-class-compact) - 1)) {
		.compact {
			display: flex;
		}
	}

	@media (max-width: calc(var(--window-class-medium) - 1)) {
		.medium {
			display: flex;
		}
	}

	@media (max-width: calc(var(--window-class-expanded) - 1)) {
		.expanded {
			display: flex;
		}
	}

	@media (max-width: calc(var(--window-class-large) - 1)) {
		.large {
			display: flex;
		}
	}

	@media (min-width: var(--window-class-large)) {
		.extra-large {
			display: flex;
		}
	}

	:global(html) {
		height: 100%;
		display: flex;
		flex-direction: column;
	}

	:global(body) {
		flex-grow: 1;

		display: flex;
		flex-direction: column;
	}

	main {
		flex-grow: 1;
		display: flex;
	}
</style>
