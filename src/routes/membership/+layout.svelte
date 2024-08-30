<script>
	import Footer from '$components/Footer.svelte';
	import Header from '$components/Header.svelte';
</script>

<div class="bg-black text-white">
	<Header title="MEMBERSHIP" subimage="/membership/membership.png" banner={false} />
	<slot />
	<Footer />
</div>
