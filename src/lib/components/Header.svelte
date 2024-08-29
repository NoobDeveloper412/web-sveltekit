<script>
	// Dummy data
	const menuItems = [
	  { name: 'Home', url: '/' },
	  { name: 'About', url: '/about' },
	  { name: 'Research', url: '/research' },
	  { name: 'Events', url: '/' },
	  { name: 'News', url: '/news' },
	  { name: 'Docs', url: '/docs' },
	  { name: 'Membership', url: '/membership' }
	];
  
	// Using key-value pairs to store right menu items
	const rightMenuItems = [
	  { name: 'twitter', url: 'https://twitter.com/web3privacy' },
	  { name: 'mirror', url: 'https://mirror.xyz/0x0f1F3DAf416B74DB3DE55Eb4D7513a80F4841073/' },
	  { name: 'github', url: 'https://github.com/web3privacy' },
	  { name: 'matrix', url: 'https://matrix.web3privacy.info' }
	];
  
	// Static values
	const banner = 'true'; // Can be an object or true/false
	const subimage = '/hp-bg.webp';
	const subtext =
	  'Advocates worldwide are uniting to make privacy fundamental pillar of the Web3 industry.';
  </script>
  
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
		  <div class="uppercase hover:text-[#c2c2c2]">
			<a href={menuItem.url} class="inline-block hover:underline px-4 py-2">
			  {menuItem.name}
			</a>
		  </div>
		{/each}
	  </div>
	  <div class="flex grow lg:grow-0 gap-3 lg:gap-6 justify-end pt-1 lg:pt-2.5">
		{#each rightMenuItems as item}
		  <a
			href={item.url}
			class={`block icon xsmall sm:small opacity-50 hover:opacity-100 ${item.name}`}
			target="_blank"
		  ></a>
		{/each}
	  </div>
	</header>
  
	{#if banner && typeof banner !== 'object'}
	  <div class="w-full flex mt-20 sm:mt-32 middle-pane-medium">
		<div>
		  <div class="w3pn-logo w-64 sm:w-72 lg:w-80 xl:w-96" />
		  <div class="text-left mt-10">
			Advocates worldwide are uniting to make privacy fundamental pillar of the Web3 industry.
		  </div>
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
			  Web3Privacy Now
			</code>
		  </pre>
		</div>
	  </div>
	  <div class="flex items-center justify-center w-full text-center">
		<h3 class="w-full max-w-[938px]">{subtext}</h3>
	  </div>
	{/if}
  </div>
  