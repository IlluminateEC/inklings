<script lang="ts">
	import Icon from '$lib/Icon.svelte';
	import type { Color } from '../common';
	import Ripple from '../Ripple.svelte';

	export let color: Color = 'primary';
	export let icon: string | undefined = undefined;
	export let icon_options: {} | undefined = undefined;
	export let label: string | undefined = undefined;
	export let style: string | undefined = undefined;
</script>

<button
	style:background-color={`var(--md-sys-color-${color}-container)`}
	style:color={`var(--md-sys-color-on-${color}-container)`}
	class="material-color-fade md-transform-target"
	on:click
	{style}
>
	{#if icon}<Icon name={icon} fill={false} {...icon_options} />{/if}
	{#if label}<span class="md-type-label-large">{label}</span>{/if}
	<Ripple />
</button>

<style>
	button {
		height: 56px;
		border: unset;
		padding: 16px;
		position: relative;
		border-radius: 16px;
		/* min-width: 80px; */

		display: flex;
		align-items: center;
		justify-content: center;
		gap: 12px;
	}
</style>
