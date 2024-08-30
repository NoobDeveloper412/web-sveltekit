<script>
	import Footer from '$components/Footer.svelte';
	import Header from '$components/Header.svelte';
</script>

<div class="bg-black text-white">
	<Header
		subimage="/about/about.png"
		banner={false}
		title={`About web3privacy`}
		subtext={`We are a privacy focused ecosystem of hacktivists, researchers, lawyers, event organisers... pushing web3privacy forward`}
	/>
	<slot />
	<Footer />
</div>
