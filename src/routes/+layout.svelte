<!-- src/routes/+layout.svelte -->
<script>
	import Header from '$components/Header.svelte';
	import Footer from '$components/Footer.svelte';
	import '../app.css';
	import '../base.css';
	import { page } from '$app/stores';

	$: showDefaultLayout = $page.url.pathname === '/';
</script>

<div class="bg-black text-white">
	{#if showDefaultLayout}
		<Header
			subtext={`Advocates worldwide are uniting to make privacy fundamental pillar of the Web3 industry.`}
		/>
	{/if}

	<slot />

	{#if showDefaultLayout}
		<Footer />
	{/if}
</div>
