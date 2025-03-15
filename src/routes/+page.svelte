<script lang="ts">
	import { goto } from '$app/navigation';

	// import Ripple from '$lib/material/Ripple.svelte';
	import FAB from '$lib/material/button/FAB.svelte';
	import ContainerTransform from '$lib/material/ContainerTransform.svelte';
	import Scaffold from '$lib/material/Scaffold.svelte';
	// import type { SvelteComponent } from 'svelte';
	import type { Component, SvelteComponent } from 'svelte';
	// import Skeleton from '$lib/material/Skeleton.svelte';

	let container_transform: SvelteComponent<
		{
			start_transform?: (
				source_element: HTMLElement,
				callback: ((HTMLElement: any) => undefined) | undefined
			) => void;
		},
		{ [evt: string]: CustomEvent<any> },
		{}
	> & { $$bindings?: string | undefined } & {
		start_transform: (
			source_element: HTMLElement,
			callback: ((HTMLElement: any) => undefined) | undefined
		) => void;
	};
</script>

<!-- <Scaffold title={'Awawawa'}>gwah</Scaffold> -->

<!-- <h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p> -->

<!-- <div
	style="width: -webkit-fill-available; width: -moz-available; height: -webkit-fill-available; height: -moz-available; display: flex; align-items: center; justify-content: center;"
>
	<div
		style="width: 400px; height: 400px; border-radius: 16px; background-color: var(--md-sys-color-secondary-container); position: relative;"
		tabindex="0"
		role="button"
	>
		<Ripple />
	</div>
</div> -->

<!-- <div class="thingy">
	{#each [0, 1, 2, 3, 4, 5, 6, 7, 8] as _}
		<div
			style="height: var(--size); border-radius: 16px; background-color: var(--md-sys-color-secondary-container); position: relative;"
		>
			<Skeleton />
		</div>
	{/each}
</div>

<div style="display: flex; gap: 8px;">
	<FAB icon={'add'} label={'Decelerate'} color={'tertiary'} on:click={() => console.log('guh')} />
</div> -->

<div
	style="width: 40em; display: flex; flex-direction: column; padding-bottom: 4px; align-self: center;"
>
	<FAB
		icon={'fullscreen'}
		label={'Container Transform'}
		on:click={(event) =>
			container_transform.start_transform(event.target! as HTMLElement, (element: HTMLElement) => {
				// window.location = 'https://kazani.dev';
				// element.remove();
				goto('/demo');
			})}
	/>
</div>
<ContainerTransform bind:this={container_transform} />

<style>
	/* :global(body, html) {
		height: -webkit-fill-available;
		height: -moz-available;
	} */

	.thingy {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		justify-content: stretch;
		gap: 8px;
		--size: 200px;
		margin-bottom: 8px;
	}
</style>
