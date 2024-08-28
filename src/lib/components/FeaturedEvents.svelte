<script>
	import EventItem from '$components/EventItem.svelte';
	import { format } from 'date-fns';
	import AboutFooter from './AboutFooter.svelte';
	export let featuredEvents;
	export let articles, talks, core;
</script>

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
		<a href={core.links.mirror} class="button inverted"><button>More articles on Mirror</button></a>
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
		<a href={core.links.youtube} class="button inverted"><button>More talks on YouTube</button></a>
	</div>

	<AboutFooter {core}  />
</div>
