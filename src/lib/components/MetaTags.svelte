<script lang="ts">
	import config from '$json/config.yaml';

	export let title: string;
	export let description: string;
	export let metaTitle: string;
	export let image: string;

	const titleFull = metaTitle || title ? `${metaTitle || title} | ${config.title}` : config.title;

	// Assuming `Astro.request.url` equivalent is obtained via the location object in a browser environment
	let url;
	if (typeof window !== 'undefined') {
		url = window.location.href;
	}
</script>

<svelte:head>
	<meta name="viewport" content="width=device-width" />
	<meta name="generator" content="SvelteKit" />
	<title>{titleFull}</title>

	<meta name="description" content={description} />

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content={url} />
	<meta property="og:title" content={titleFull} />
	<meta property="og:description" content={description} />
	<meta
		property="og:image"
		content={image
			? `https://web3privacy.info/og/${image}.png`
			: 'https://web3privacy.info/og/og_index.png'}
	/>

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content={url} />
	<meta property="twitter:title" content={titleFull} />
	<meta property="twitter:description" content={description} />
	<meta
		property="twitter:image"
		content={image
			? `https://web3privacy.info/og/${image}.png`
			: 'https://web3privacy.info/og/og_index.png'}
	/>
</svelte:head>
