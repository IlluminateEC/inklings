<script lang="ts">
	import Icon from '$lib/Icon.svelte';
	import type { Color } from '../common';
	import Ripple from '../Ripple.svelte';

	export let color: Color | undefined = undefined;
	export let icon: string | undefined = undefined;
	export let icon_options: {} | undefined = undefined;
	export let style: string | undefined = undefined;
</script>

<button
	style:background-color={color ? `var(--md-sys-color-${color}-container)` : 'unset'}
	style:color={color
		? `var(--md-sys-color-on-${color}-container)`
		: 'var(--md-sys-color-on-surface-variant)'}
	class="material-color-fade md-transform-target"
	on:click
	{style}
>
	{#if icon}<Icon name={icon} fill={false} {...icon_options} />{/if}
	<Ripple />
</button>

<style>
	button {
		height: 48px;
		width: 48px;
		border: unset;
		padding: 16px;
		position: relative;
		border-radius: 100vmax;

		display: flex;
		align-items: center;
		justify-content: center;
		user-select: none;
	}
</style>
