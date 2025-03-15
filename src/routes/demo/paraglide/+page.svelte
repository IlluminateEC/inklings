<script lang="ts">
	import { locales, setLocale } from '$lib/paraglide/runtime';
	import { m } from '$lib/paraglide/messages';
	import Icon from '$lib/Icon.svelte';
</script>

<h1>
	<Icon name={'cookie'} />{m.hello_world({ name: 'SvelteKit User' })}
</h1>
<div>
	<button onclick={() => setLocale('en')}>en</button>
	<button onclick={() => setLocale('de')}>de</button>
</div>
