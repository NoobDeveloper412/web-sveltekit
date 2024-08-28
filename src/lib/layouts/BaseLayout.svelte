<script>
	import core from '$json/core.json';
	import config from '$json/config.yaml';
	import cfonts from 'cfonts';
	import MetaTags from '$components/MetaTags.svelte';

	export let banner, title, metaTitle, description, image, subtext, subimage;

	function genHeading(str) {
		return cfonts.render(str + ' ', { font: '', maxLength: 5000 }, null, null, {
			width: '5000',
			height: '5000'
		}).string;
	}

	const menuItems = config.header.menu;
	const rightMenuItems = config.header.rightMenu;
	const footerMenuItems = config.footer.menu;
</script>

<html lang="en">
	<head>
		<meta charset="utf-8" />
		<link rel="icon" type="image/x-icon" href="/favicon.ico" />

		<!-- <MetaTags
			title={metaTitle ? metaTitle : title ? title : config.name}
			description={description ? description : config.description}
			{image}
		/> -->

		<link
			rel="preload"
			href="/fonts/archivo-regular-latin-ext.woff2"
			as="font"
			type="font/woff2"
			crossorigin
		/>
		<link
			rel="preload"
			href="/fonts/archivo-regular-latin.woff2"
			as="font"
			type="font/woff2"
			crossorigin
		/>
		<link
			rel="preload"
			href="/fonts/major-mono-display-v13-latin-regular.woff2"
			as="font"
			type="font/woff2"
			crossorigin
		/>
		<link
			rel="preload"
			href="/fonts/dm-mono-regular-latin.woff2"
			as="font"
			type="font/woff2"
			crossorigin
		/>
	</head>
	<body class="bg-black text-white">
		<div class="nav-links">
			<div class="w-full">
				{#each menuItems as menuItem}
					<div class="uppercase w-full">
						<a
							href={core.links[menuItem.link] || menuItem.url}
							class="inline-block hover:underline px-4 py-2 {menuItem.url?.match(/^http/)
								? 'external'
								: ''}"
						>
							{menuItem.name}
						</a>
					</div>
				{/each}
			</div>
		</div>

		<div
			class="w-full z-10 relative {typeof banner === 'object'
				? 'aspect-video'
				: banner
					? 'h-[600px]'
					: 'pb-6'}"
			style={subimage
				? `background-image: url(${subimage}); background-size: cover; background-position: 0rem 0rem;`
				: ''}
			id={banner === 'true' ? 'intro' : 'no-intro'}
		>
			{#if typeof banner === 'object'}
				<div class="absolute w-full aspect-video -z-10">
					<div
						class="w-full h-full"
						style={`background-image: url(${banner.img}); background-size: 100% 100%; background-position: 0rem 0rem;`}
					/>
				</div>
			{/if}

			<header class="flex pt-6 middle-pane-big">
				<div class="mr-4 lg:hidden">
					<button
						class="hamburger"
						on:click={() => document.querySelector('.nav-links').classList.toggle('expanded')}
					></button>
				</div>
				<div class="w-40">
					<a href="/" class="w3pn-logo {banner ? 'hidden' : 'block'}"><span></span></a>
				</div>
				<div class="hidden lg:flex grow gap-0 xl:gap-2 justify-center">
					{#each menuItems as menuItem}
						<div
							class="uppercase hover:text-[#c2c2c2] {menuItem.link ? 'xexternal' : ''} {'' ===
							menuItem.url
								? 'text-white'
								: ''}"
						>
							<a
								href={core.links[menuItem.link] || menuItem.url}
								class="inline-block hover:underline px-4 py-2"
							>
								{menuItem.name}
							</a>
						</div>
					{/each}
				</div>
				<div class="flex grow lg:grow-0 gap-3 lg:gap-6 justify-end pt-1 lg:pt-2.5">
					{#each rightMenuItems as key}
						<a
							href={core.links[key]}
							class="block icon xsmall sm:small opacity-50 hover:opacity-100 {key}"
							target="_blank"
						></a>
					{/each}
				</div>
			</header>

			{#if banner && typeof banner !== 'object'}
				<div class="w-full flex mt-20 sm:mt-32 middle-pane-medium">
					<div>
						<div class="w3pn-logo w-64 sm:w-72 lg:w-80 xl:w-96" />
						<div class="text-left mt-10">{config.hero.text}</div>
						<div class="mt-6">
							<a class="button" href="/about">
								<button>About Web3Privacy Now</button>
							</a>
						</div>
					</div>
				</div>
			{:else}
				<div class="middle-pane-medium mt-8 sm:mt-14 mb-2 sm:mb-8">
					<div class="leading-none flex justify-center text-[4px] sm:text-[8px] text-white">
						<pre>
                <code class="font-mono layout-heading">
                  {@html genHeading(title)}
                </code>
              </pre>
					</div>
				</div>
				<div class="flex items-center justify-center w-full text-center">
					<h3 class="w-full max-w-[938px]">{subtext}</h3>
				</div>
			{/if}
		</div>

		<slot />

		<div
			class="border border-t-2 border-b-0 border-l-0 border-r-0 border-[#0f0f0f] mt-20 pt-10 pb-10"
		>
			<div class="middle-pane-big">
				<div class="flex gap-10 text-lg items-center flex-wrap align-top" id="footerMenu">
					<a href="/" class="w3pn-logo w-32"></a>
					<div class="text-md">
						<a href="https://github.com/web3privacy/web" class="text-white hover:underline">{1.1}</a
						>
					</div>
					<div class="grow flex sm:justify-end">
						<div class="sm:flex justify-center flex-wrap gap-4 lg:gap-10">
							{#each footerMenuItems as item}
								<div class="flex gap-4 items-center menuItem lg:mb-0 mb-2">
									<div class="icon small opacity-50 {item.ico}"></div>
									<div class="text-white hover:underline">
										<a href={item.url || core.links[item.link]}>
											{item.title}
										</a>
									</div>
								</div>
							{/each}
						</div>
					</div>
				</div>
			</div>
		</div>
	</body>
</html>
