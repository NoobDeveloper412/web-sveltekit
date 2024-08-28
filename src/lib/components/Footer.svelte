<script>
	// Dummy data for footer menu items
	const footerMenuItems = [
		{ title: 'Docs', url: '/docs', ico: 'docs-icon' },
		{ title: '@web3privacy', url: 'https://twitter.com/web3privacy', ico: 'twitter-icon' },
		{ title: 'GitHub', url: 'https://github.com/web3privacy/web', ico: 'github-icon' },
		{ title: 'Matrix', url: 'https://matrix.to/#/#web3privacy:matrix.org', ico: 'matrix-icon' }
	];
</script>

<div class="border border-t-2 border-b-0 border-l-0 border-r-0 border-[#0f0f0f] mt-20 pt-10 pb-10">
	<div class="middle-pane-big">
		<div class="flex gap-10 text-lg items-center flex-wrap align-top" id="footerMenu">
			<a href="/" class="w-32 h-full"><img src="/logo.svg" alt=""></a>
			<div class="text-md">
				<a href="https://github.com/web3privacy/web" class="text-white hover:underline">1.1</a>
			</div>
			<div class="grow flex sm:justify-end">
				<div class="sm:flex justify-center flex-wrap gap-4 lg:gap-10">
					{#each footerMenuItems as item}
						<div class="flex gap-4 items-center menuItem lg:mb-0 mb-2">
							<div class={`icon small opacity-50 ${item.ico}`}></div>
							<div class="text-white hover:underline">
								<a href={item.url}>{item.title}</a>
							</div>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
</div>
