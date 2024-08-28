<script>
	import Footer from '$components/Footer.svelte';
	import Header from '$components/Header.svelte';
	import '../app.css';
	import '../base.css';
</script>

<div class="bg-black text-white">
	<Header />
	<slot />
	<Footer />
</div>
