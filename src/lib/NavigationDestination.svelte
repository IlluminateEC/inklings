<script lang="ts">
	import { page } from '$app/stores';
	import Icon from '$lib/Icon.svelte';
	import Ripple from './material/Ripple.svelte';

	export let icon: string;
	export let href: string;
	let active = $page.url.href.startsWith(href.startsWith('/') ? href.substring(1) : href);
</script>

<a class="material-color-fade md-transform-target" class:active {href}>
	<Icon name={icon} fill={active} />
	<Ripple />
</a>

<style>
	a,
	a:visited {
		height: 56px;
		width: 56px;
		border: unset;
		box-sizing: border-box;
		padding: 16px;
		position: relative;
		border-radius: 100vmax;

		display: flex;
		align-items: center;
		justify-content: center;
		color: var(--md-sys-color-on-surface);
		background-color: unset;
		user-select: none;
		text-decoration: none;
	}

	a.active {
		background-color: var(--md-sys-color-secondary-container);
		color: var(--md-sys-color-on-surface-variant);
	}
</style>
