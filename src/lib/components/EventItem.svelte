<script>
	import { marked } from 'marked';
	import EventsExt from '$json/events-ext.json';
	import core from '$json/core.json';
	import {
		dateFormat,
		dateEnd,
		nameRenderer,
		ccRenderer,
		eventStatus,
		getSpeaker,
		findExt,
		getEventPoster
	} from '$utils/events';
	// import SpeakerList from './SpeakerList.svelte';
	import PeopleCarousel from './PeopleCarousel.svelte';

	export let item;

	const ext = findExt(EventsExt, item);
	const status = eventStatus(item);
	const eventPoster = getEventPoster(item);
</script>

<div class="w3pn-event-item">
	<div class="event-header flex">
		<div class="header-base sm:flex gap-4 grow px-3 py-2.5 sm:px-4 sm:py-3">
			<div class="w-full sm:w-28 flex sm:block sm:text-right leading-normal">
				<div>{dateFormat(item.date)}</div>
				{#if item.days && item.days > 1}
					<div class="ml-1.5">
						<span class="inline-block sm:hidden">- </span>{dateFormat(
							dateEnd(item.date, item.days)
						)}
					</div>
				{/if}
			</div>
			<div>
				<div>
					<a href={`/event/${item.id}`} class="text-white text-lg hover:underline"
						>{nameRenderer(item)}</a
					>
					{#if item.issue}
						<a
							href={`https://github.com/web3privacy/events/issues/${item.issue}`}
							class="ml-0.5 text-white/30 hover:underline">#{item.issue}</a
						>
					{/if}
					<div class="inline-block ml-2">
						{#if item.type === 'hackathon'}<span
								class="text-xs ml-2 text-black bg-white px-1 py-0.5">HACKATHON</span
							>{/if}
						{#if item.type === 'summit'}<span class="text-xs ml-2 text-black bg-white px-1 py-0.5"
								>SUMMIT</span
							>{/if}
						{#if item.type === 'online-summit'}<span
								class="text-xs ml-2 text-black bg-white px-1 py-0.5">ONLINE</span
							>{/if}
						{#if item.type === 'privacy-corner'}<span
								class="text-xs ml-2 text-black bg-gray-500 px-1 py-0.5">↴ PC</span
							>{/if}
						{#if item.tags && item.tags.includes('sfe')}<span
								class="text-xs ml-2 text-black bg-gray-500 px-1 py-0.5"
								title="Sponsorship Free Edition (SFE)">SFE</span
							>{/if}
					</div>
				</div>
				<div class="flex gap-2">
					{#if item.type !== 'online-summit'}
						<img src={`/flags/${item.country}.svg`} class="w-4" />
						<div>
							{item.city}, {item.country.toUpperCase()}
							{#if item.coincidence}
								<span>&nbsp;- {ccRenderer(item)}</span>
							{/if}
						</div>
					{:else}
						<img src="/flags/other/earth.svg" class="w-4" />
						<div>Global</div>
					{/if}
				</div>
			</div>
			<div class="py-1 grow text-right items-center flex gap-4">
				<div class="grow"></div>
				{#if item.speakers}
					<PeopleCarousel items={item.speakers.map((spId) => getSpeaker(core, spId))} />
				{/if}
				{#if ext && ext.guestCount > 0}
					<div>
						<div class="text-center text-white leading-tight">{ext.guestCount}</div>
						<div class="text-xs">guests</div>
					</div>
				{/if}
				{#if item.visitors && item.visitors > 0}
					<div>
						<div class="text-center text-white leading-tight">{item.visitors}</div>
						<div class="text-xs">guests</div>
					</div>
				{/if}
				{#if item.links?.rsvp}
					<a href={item.links.rsvp} class="button inverted"><button>Join</button></a>
				{/if}
			</div>
		</div>
	</div>
	<div class="detail hidden flex flex-wrap sm:flex-nowrap sm:gap-4">
		<div class="w-0 sm:w-28"></div>
		<div class="grow">
			<div>
				Date: <span class="text-white"
					>{dateFormat(item.date)}
					{item.days
						? ' - ' + dateFormat(dateEnd(item.date, item.days)) + ` (${item.days} days)`
						: ''}</span
				>
			</div>
			<div>
				{#if item.type !== 'online-summit'}
					<div>
						Venue:
						{#if item.place}
							<!-- <span class="text-white" {@html marked.parseInline(item.place)}></span> -->
						{:else}
							TBD
						{/if}
					</div>
				{/if}
				{#if item.place && item['place-address']}
					<span> @ </span>
					<span class="text-white">{item['place-address']}</span>
				{/if}
			</div>

			<div>Status: <span class={`mr-1.5 text-xs ${status.color}`}>●</span> {status.title}</div>
			<div class="mt-4 mb-2 flex flex-wrap gap-4">
				<a href={`/event/${item.id}`} class="button inverted"><button>More details</button></a>
				{#if item.links?.rsvp}
					<a href={item.links.rsvp} class="button inverted"><button>RSVP</button></a>
				{/if}
				{#if item.links?.web}
					<a href={item.links.web} class="button inverted"><button>Website</button></a>
				{/if}
			</div>
			<!-- <SpeakerList {item} /> -->
		</div>
		{#if eventPoster}
			<div><a href={`/event/${item.id}`}><img src={eventPoster} class="w-64" /></a></div>
		{/if}
	</div>
</div>
