<script lang="ts">
	import { assets } from '$app/paths';
	import Ripple from './material/Ripple.svelte';
	import NavigationDestination from './NavigationDestination.svelte';
</script>

<div
	class="navrail"
	style:background={`color-mix(in hsl, 30% var(--md-sys-color-surface-dim), 70% black) url("${assets}/noise.svg")`}
>
	<NavigationDestination icon={'dashboard'} href={'/'} />
	<NavigationDestination icon={'feed'} href={'/demo'} />
	<div style="flex-grow: 1;"></div>
	<NavigationDestination icon={'settings'} href={'/settings'} />
	<!-- <NavigationDestination icon={'person'} href={'/account'} /> -->
	<div class="account">
		<img src="https://fraya.dev/assets/index.webp" />
		<Ripple />
	</div>
</div>

<style>
	.navrail {
		display: flex;
		flex-direction: column;
		width: 80px;
		padding-block: 40px;
		align-items: center;
	}

	.account {
		display: flex;
		width: 56px;
		height: 56px;
		position: relative;
		background-color: #7f7f7f;
		border-radius: 100vmax;
		overflow: hidden;
	}
</style>
