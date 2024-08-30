<script>
	import config from '$json/config.yaml'; 
	import core from '$json/core.json'; 
	import AboutItemGrid from '$components/AboutItemGrid.svelte';
	import AboutWidget from '$components/AboutWidget.svelte';
	import AboutFooter from '$components/AboutFooter.svelte';
</script>

<div class="middle-pane-medium mt-10">
	<!--  <div class="mb-20">
      <a href="https://docs.web3privacy.info/manifesto">
        <img src="/bringing-100m-to-privacy-market.png" alt="Mission Banner"/>
      </a>
    </div> -->

	<div class="grid grid-cols-1 xl:grid-cols-2 gap-16 mb-[82px]">
		<div class="flex flex-col gap-[36px] md:order-2">
			<div class="md:hidden block mb-[12px]">
				<h1>Our mission</h1>
				<div>{@html config.landing.mission}</div>
				<div class="mt-8 flex gap-6 items-center w-full">
					<a class="button inverted" href={core.links.manifesto}>
						<button>Read manifesto</button>
					</a>
					<a class="button" href={core.links.telegram}>
						<button>Join us</button>
					</a>
				</div>
			</div>
			<h1>how we support privacy in web3</h1>
			<AboutItemGrid />
		</div>

		<div class="md:order-1 order-2">
			<div class="md:block hidden">
				<h1>Our mission</h1>
				<div>{@html config.landing.mission}</div>
				<div class="mt-8 flex gap-6 items-center w-full">
					<a class="button inverted" href={core.links.manifesto}>
						<button>Read manifesto</button>
					</a>
					<a class="button" href={core.links.telegram}>
						<button>Join us</button>
					</a>
				</div>
			</div>

			<div class="md:mt-[56px] mt-[26px]">
				<h1>our events</h1>
				<div>{@html config.landing.event}</div>
				<div class="mt-8 flex flex-col gap-6 items-start w-full">
					<div class="grid grid-cols-2 gap-[8px]">
						<img src="/about/1.png" alt="Event1" />
						<img src="/about/2.png" alt="Event2" />
						<img src="/about/3.png" alt="Event3" />
						<img src="/about/4.png" alt="Event" />
					</div>
					<a class="button inverted" href="/events">
						<button>EVENTS</button>
					</a>
				</div>
			</div>

			<div class="md:mt-[56px] mt-[26px]">
				<h1>Our Projects & research</h1>
				<div>{@html config.landing.research}</div>
				<div class="mt-8 flex gap-6 items-center w-full">
					<a class="button inverted" href={core.links.projects}>
						<button>Projects</button>
					</a>
					<a class="button inverted" href={core.links.research}>
						<button>Research</button>
					</a>
				</div>
			</div>
		</div>
	</div>

	<AboutWidget variant="membership" />

	<div class="flex md:flex-row flex-col items-center gap-[24px] justify-center w-full mt-[24px]">
		<div class="md:mt-[56px] mt-[26px] max-w-[460px] md:order-1 order-2">
			<h1>empowering community with our brand</h1>
			<div>{@html config.landing.merch}</div>
			<div class="mt-8 flex gap-6 items-center w-full">
				<a class="button inverted" href={core.links.brand}>
					<button>Brand on Github</button>
				</a>
			</div>
		</div>
		<div class="md:order-2 order-1">
			<img src="/about/stickers.png" alt="Brand Stickers" />
		</div>
	</div>

	<AboutFooter />
</div>
