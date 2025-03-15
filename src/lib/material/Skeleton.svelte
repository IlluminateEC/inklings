<script lang="ts">
	import { onMount } from 'svelte';

	let loader: HTMLElement;
	let offset = 0;

	onMount(() => {
		let count = 0;
		let found = false;

		Array.from(document.querySelectorAll('.skeleton-loader')).forEach((element) => {
			if (!found) {
				if (element == loader) {
					found = true;
				} else {
					count++;
				}
			}
		});

		offset = count;
	});
</script>

<span class="skeleton-loader" bind:this={loader} style:--loader-offset={offset}></span>

<style>
	.skeleton-loader {
		--loader-pulse-duration: 2s;
		position: absolute;
		inset: 0;
		border-radius: inherit;
		opacity: 0.5;
		/* counter-increment: skeleton-loaders; */
	}

	.skeleton-loader::before {
		opacity: 0.1;
		position: absolute;
		inset: 0;
		content: '';
		background-color: var(--md-sys-color-background);
		filter: invert();
		border-radius: inherit;
		animation-iteration-count: infinite;
		animation-name: pulse-loader;
		animation-timing-function: var(--md-easing-standard);
		animation-duration: var(--loader-pulse-duration);
		animation-delay: calc(var(--loader-pulse-duration) * -0.9 * var(--loader-offset));
	}

	@keyframes pulse-loader {
		from {
			/* opacity: 0.1; */
			opacity: 0;
			/* background-color: var(--md-sys-color-surface-container-lowest); */
		}

		50% {
			opacity: 0.35;
			/* background-color: var(--md-sys-color-surface-container-highest); */
		}

		to {
			opacity: 0;
			/* background-color: var(--md-sys-color-surface-container-lowest); */
		}
	}

	/* :root {
		counter-reset: skeleton-loaders;
	} */
</style>
