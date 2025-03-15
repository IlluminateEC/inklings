<script lang="ts">
	import { get_offset } from './common';

	let transform_container: HTMLElement;

	export function start_transform(
		source_element: HTMLElement,
		callback: ((HTMLElement) => undefined) | undefined
	) {
		let element = source_element;

		while (element !== undefined && !element.classList.contains('md-transform-target')) {
			element = element.parentElement;
		}

		if (element === undefined) {
			console.error("No parent in element's tree has md-transform-target class");
			return;
		}

		let computed_properties = element.computedStyleMap();
		let offset = get_offset(element);
		let rect = element.getBoundingClientRect();

		let new_element = document.createElement('div');

		new_element.classList.add('md-container-transform');

		new_element.style.position = 'fixed';
		new_element.style.top = `${offset.y}px`;
		new_element.style.left = `${offset.x}px`;
		new_element.style.width = `${rect.width}px`;
		new_element.style.height = `${rect.height}px`;
		new_element.style.backgroundColor = computed_properties.get('background-color');
		new_element.style.borderRadius = computed_properties.get('border-radius');
		new_element.style.opacity = computed_properties.get('opacity');

		transform_container.appendChild(new_element);

		setTimeout(() => {
			new_element.style.top = `0px`;
			new_element.style.left = `0px`;
			new_element.style.width = `100vw`;
			new_element.style.height = `100vh`;
			new_element.style.opacity = '1';
			new_element.style.borderRadius = '0px';
		});

		new_element.addEventListener('transitionend', () => {
			if (callback) {
				callback(new_element);
			}
		});
	}
</script>

<div class="transform-container" bind:this={transform_container}></div>

<style>
	:global(.md-container-transform) {
		transition: all var(--md-duration-long4) var(--md-easing-standard);
	}
</style>
