<script>
	import AboutFooter from '$components/AboutFooter.svelte';
	import AboutWidget from '$components/AboutWidget.svelte';
</script>

<div class="middle-pane-medium my-10">
	<div class="flex items-center justify-center w-full text-center mt-20 mb-20">
		<h3 class="max-w-[900px] w-full">
			for all privacy advocates, projects and companies, we offer a simple and straightforward way
			to support us financially and become an integral part of our ecosystem.
		</h3>
	</div>
	<div>
		<AboutWidget variant="membership" />
	</div>

	<AboutFooter />
</div>
