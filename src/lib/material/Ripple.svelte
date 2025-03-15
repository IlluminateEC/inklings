<script lang="ts">
	// import { MDCRipple, type MDCRippleAttachOpts } from '@material/ripple';
	import { onMount } from 'svelte';
	import { get_offset } from './common';

	// export let element: HTMLElement;
	export let enabled: boolean = true;
	export let color: string = 'var(--md-sys-color-on-surface)';
	// export let options: MDCRippleAttachOpts | undefined = undefined;

	let internal_element: HTMLElement;

	function delete_ripple(event: TransitionEvent) {
		(event.target! as HTMLElement).remove();
	}

	function max(a: number, b: number): number {
		return a > b ? a : b;
	}

	function distance(x1: number, y1: number, x2: number, y2: number): number {
		return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
	}

	function calculate_scale(rect: DOMRect, x: number, y: number): number {
		return max(
			max(distance(0, 0, x, y), distance(rect.width, 0, x, y)),
			max(distance(0, rect.height, x, y), distance(rect.width, rect.height, x, y))
		);
	}

	function handle_interaction(x: number, y: number) {
		let ripple = document.createElement('span');

		ripple.className = 'material-ripple';

		ripple.setAttribute('style', `--ripple-x: ${x}px; --ripple-y: ${y}px;`);
		setTimeout(() =>
			ripple.setAttribute(
				'style',
				ripple.getAttribute('style') +
					` --ripple-scale: ${calculate_scale(internal_element.getBoundingClientRect(), x, y) * 2.5}; --ripple-opacity: 0;`
			)
		);
		ripple.addEventListener('transitionend', delete_ripple);

		internal_element.appendChild(ripple);
	}

	onMount(() => {
		if (!enabled) {
			return;
		}

		internal_element.parentElement?.addEventListener('click', (event) => {
			let rect = get_offset(internal_element);

			handle_interaction(event.pageX - rect.x, event.pageY - rect.y);
		});
		// internal_element.parentElement?.addEventListener('touchstart', (event) => {
		// 	let rect = internal_element.getBoundingClientRect();

		// 	handle_interaction(event.pageX - rect.x, event.pageY - rect.y);
		// });
		internal_element.parentElement?.addEventListener('keydown', (event) => {
			if (event.key === ' ' || event.key === 'Enter') {
				let rect = internal_element.getBoundingClientRect();

				handle_interaction(rect.width / 2, rect.height / 2);
			}
		});

		internal_element.parentElement?.attributeStyleMap.set(
			'-webkit-tap-highlight-color',
			'rgba(0, 0, 0, 0)'
		);
	});
</script>

{#if enabled}
	<span
		bind:this={internal_element}
		role="none"
		class="material-ripple-container"
		style:--ripple-color={color}
	>
	</span>
{/if}

<style>
	:global(.material-ripple) {
		--ripple-scale: 0;
		--ripple-opacity: 0.16;
		border-radius: 100vmax;
		width: 1px;
		height: 1px;
		position: absolute;
		left: var(--ripple-x);
		top: var(--ripple-y);
		scale: var(--ripple-scale);
		opacity: var(--ripple-opacity);
		transition:
			scale var(--md-duration-long4) var(--md-easing-emphasized-decelerate),
			opacity var(--md-duration-long4) ease-in;
		background-image: radial-gradient(var(--ripple-color), transparent);
		/* background-image: radial-gradient(
			var(--ripple-color),
			color-mix(in lab, var(--ripple-color) 20%, transparent 100%)
		); */
		/* background-color: var(--ripple-color); */
		pointer-events: none;
	}

	.material-ripple-container {
		position: absolute;
		inset: 0;
		border-radius: inherit;
		overflow: hidden;
		--ripple-opacity: 0;
		cursor: pointer;
	}

	.material-ripple-container::before {
		position: absolute;
		opacity: var(--ripple-opacity);
		content: '';
		background-color: var(--ripple-color);
		transition: opacity var(--md-duration-medium4) var(--md-easing-emphasized-decelerate);
		inset: 0;
	}

	.material-ripple-container:hover {
		--ripple-opacity: 0.08;
	}

	:global(:focus-visible > .material-ripple-container) {
		outline-style: solid;
		outline-offset: 2px;
		outline-width: 2px;
		outline-color: var(--md-sys-color-outline);

		--ripple-opacity: 0.1;
	}

	:global(:focus-visible > .material-ripple-container:hover) {
		--ripple-opacity: 0.18;
	}

	:global(:active > .material-ripple-container) {
		--ripple-opacity: 0.16;
	}

	:global(:focus-visible:has(> .material-ripple-container)) {
		outline: unset;
	}
</style>
