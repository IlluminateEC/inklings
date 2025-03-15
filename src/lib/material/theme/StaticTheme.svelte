<script lang="ts">
	import {} from './static.css';

	import {
		type Brightness,
		type ContrastLevel,
		type MaterialTheme,
		generate_media_queries,
		generate_typography_classes,
		type TypographyData
	} from './generator';

	import typography_data from '$lib/../data/typography.json';

	export let material_theme: MaterialTheme;
	export let brightness: Brightness = 'system';
	export let contrast: ContrastLevel = 'system';

	let styles =
		generate_media_queries(material_theme, brightness, contrast) +
		generate_typography_classes(typography_data as TypographyData);
</script>

<svelte:head>
	{@html `<style>${styles}</style>`}
</svelte:head>
