<script>
	// import BaseLayout from '$layouts/BaseLayout.svelte';
	// import AboutFooter from '$components/Footer.svelte';
	// import EventItem from '$components/EventItem.svelte';
	import { isFutureDate } from '$utils/date';
	import Achievements from '$components/Achievements.svelte';

	// Static data
	import core from '$json/core.json';
	import articles from '$json/articles.json';
	import talks from '$json/talks.json';
	import dbRepo from '$json/db-repo.json';
	import FeaturedEvents from '$components/FeaturedEvents.svelte';

	const events = core.events;

	let eventsPast = 0;
	let eventsUpcoming = 0;
	let upcomingEvents = [];
	let featuredEvents = [];

	for (const ev of events) {
		let future = isFutureDate(ev.date);
		if (future) {
			upcomingEvents.push(ev);
			eventsUpcoming++;
		} else {
			eventsPast++;
		}
	}

	for (const e of upcomingEvents) {
		if (featuredEvents.length > 2) {
			break;
		}
		if (
			['summit', 'meetup', 'online-summit'].includes(e.type) &&
			e.links?.rsvp &&
			!featuredEvents.find((ex) => ex.type === e.type)
		) {
			featuredEvents.push(e);
		}
	}
</script>

<Achievements {eventsPast} {eventsUpcoming} />
<FeaturedEvents {featuredEvents} {talks} {articles} {core} />
<!-- <BaseLayout
	banner="true"
	description="Advocates worldwide are uniting to make privacy a fundamental pillar of the Web3 industry, transforming it into a cultural movement that champions freedom and decentralization."
> -->
<!-- <div class="middle-pane-big">
		<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w3pn-hp-grid gap-2 mt-2">
			<button class="bg-events" on:click={() => (window.location = '/events')}>
				<div class="title">Events</div>
				<div class="numbers">
					<div>
						<div class="big">{eventsUpcoming}</div>
						<div>Upcoming events</div>
					</div>
					<div>
						<div class="big">{eventsPast}</div>
						<div>Past events</div>
					</div>
				</div>
			</button>
			<button
				class="bg-projects relative"
				on:click={() =>
					(window.location =
						'https://github.com/web3privacy/web3privacy/blob/main/README.md#contents')}
			>
				<div class="title">
					<div class="flex items-center">
						<div class="icon github small mr-1.5 inline-block"></div>
						<div class="text-white mt-1 ml-1.5">
							<a href="https://github.com/web3privacy/web3privacy/blob/main/README.md#contents"
								>Web3 Privacy Database</a
							>
						</div>
					</div>
				</div>
				<div class="flex items-center absolute top-4 right-4 text-white opacity-30">
					<div class="icon star small mr-1.5"></div>
					{dbRepo.stars}
				</div>
				<div class="numbers">
					<div>
						<div class="big">{dbRepo.count}</div>
						<div>Projects</div>
					</div>
					<div>
						<div class="big">{dbRepo.contributors}</div>
						<div>Contributors</div>
					</div>
				</div>
			</button>
			<button class="bg-talks" on:click={() => (window.location = '/research')}>
				<div class="title">Research</div>
				<div class="numbers">
					<div>
						<div class="big">{core.research.length} research projects →</div>
					</div>
				</div>
			</button>
		</div>
	</div>

	<div class="middle-pane-medium mt-10">
		<div class="mt-16">
			<h1>Featured Upcoming Events</h1>
		</div>

		<div class="mb-6">
			{#each featuredEvents as event}
				<EventItem item={event} />
			{/each}
		</div>

		<div class="mt-6">
			<a href="/events" class="button inverted"><button>Show all events</button></a>
		</div>

		<div class="mt-16">
			<h1>Latest Articles</h1>
		</div>

		<div class="w3pn-articles grid md:grid-cols-2 gap-6">
			{#each articles.slice(0, 4) as entry}
				<div
					class="basegrid-entry aspect-video"
					style="background-image: url('{entry.img}'); background-size: 100% 100%;"
				>
					<div class="title">
						<a href={entry.url}>{entry.title}</a>
						<span class="date">{format(new Date(entry.date), 'MMMM do, yyyy')}</span>
					</div>
				</div>
			{/each}
		</div>

		<div class="mt-8">
			<a href={core.links.mirror} class="button inverted"
				><button>More articles on Mirror</button></a
			>
		</div>

		<div class="mt-16">
			<h1>Latest Talks</h1>
		</div>

		<div class="grid md:grid-cols-2 gap-6">
			{#each talks.slice(0, 4) as entry}
				<div
					class="basegrid-entry aspect-video"
					style="background-image: url('{entry.img}'); background-size: cover; background-position: center"
				>
					<a href={entry.url} class="w-full h-full" title={entry.title}></a>
				</div>
			{/each}
		</div>

		<div class="mt-8">
			<a href={core.links.youtube} class="button inverted"><button>More talks on YouTube</button></a
			>
		</div>

		 <AboutFooter />
	</div> -->
<!-- </BaseLayout> -->
