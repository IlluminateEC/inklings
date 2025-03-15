<script lang="ts">
	export let name: string;
	export let color: string | undefined = undefined;
	export let size: string | undefined = undefined;
	export let fill: boolean = true;
	export let weight: 100 | 200 | 300 | 400 | 500 | 600 | 700 = 400;
	export let grade: number = 0;
	export let optical_size: 20 | 24 | 40 | 48 = 24;
</script>

<span
	class="material-symbols-outlined"
	style:color
	style:font-size={size}
	style:font-variation-settings={`'FILL' ${fill ? 1 : 0}, 'wght' ${weight}, 'GRAD' ${grade}, 'opsz' ${optical_size}`}
	>{name}</span
>
