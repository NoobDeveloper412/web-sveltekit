<script>

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
	/**
	 * @type {({ id: string; type: string; date: string; city: string; country: string; place: string; "place-address": string; confirmed: boolean; coincidence: string; lead: string; slots: number; visitors: number; links: { web: string; git: string; rsvp?: undefined; signal?: undefined; }; speakers: string[]; images: { poster: string; wide?: undefined; square?: undefined; "wide-square"?: undefined; "poster-simple"?: undefined; }; thumbs: { "poster:360": string; "poster:640": string; "poster:128": string; "square:128"?: undefined; "wide-square:128"?: undefined; "square:640"?: undefined; "wide-square:640"?: undefined; "poster-simple:360"?: undefined; "square:360"?: undefined; "poster-simple:128"?: undefined; "wide:640"?: undefined; "wide-square:360"?: undefined; "wide:360"?: undefined; "poster-simple:640"?: undefined; "wide:128"?: undefined; }; issue?: undefined; optional?: undefined; design?: undefined; helpers?: undefined; tags?: undefined; days?: undefined; } | { id: string; type: string; date: string; city: string; country: string; place: string; "place-address": string; confirmed: boolean; coincidence: string; lead: string; slots: number; visitors: number; links: { web: string; git?: undefined; rsvp?: undefined; signal?: undefined; }; speakers: string[]; images: { poster?: undefined; wide?: undefined; square?: undefined; "wide-square"?: undefined; "poster-simple"?: undefined; }; thumbs: { "poster:360"?: undefined; "poster:640"?: undefined; "poster:128"?: undefined; "square:128"?: undefined; "wide-square:128"?: undefined; "square:640"?: undefined; "wide-square:640"?: undefined; "poster-simple:360"?: undefined; "square:360"?: undefined; "poster-simple:128"?: undefined; "wide:640"?: undefined; "wide-square:360"?: undefined; "wide:360"?: undefined; "poster-simple:640"?: undefined; "wide:128"?: undefined; }; issue?: undefined; optional?: undefined; design?: undefined; helpers?: undefined; tags?: undefined; days?: undefined; } | { id: string; issue: number; type: string; date: string; city: string; country: string; coincidence: string; optional: boolean; slots: number; lead: string; visitors: number; design: { image: string; }; helpers: string[]; links: { rsvp: string; signal: string; web?: undefined; git?: undefined; }; speakers: string[]; images: { wide: string; square: string; "wide-square": string; "poster-simple": string; poster: string; }; thumbs: { "square:128": string; "wide-square:128": string; "square:640": string; "poster:128": string; "wide-square:640": string; "poster-simple:360": string; "square:360": string; "poster:360": string; "poster-simple:128": string; "wide:640": string; "poster:640": string; "wide-square:360": string; "wide:360": string; "poster-simple:640": string; "wide:128": string; }; place?: undefined; "place-address"?: undefined; confirmed?: undefined; tags?: undefined; days?: undefined; } | { id: string; issue: number; type: string; date: string; city: string; country: string; place: string; "place-address": string; lead: string; visitors: number; helpers: string[]; coincidence: string; slots: number; links: { rsvp: string; signal: string; web?: undefined; git?: undefined; }; speakers: string[]; design: { image: string; }; images: { square: string; "wide-square": string; wide: string; poster: string; "poster-simple": string; }; thumbs: { "square:640": string; "poster-simple:640": string; "wide-square:128": string; "wide:128": string; "square:128": string; "poster-simple:360": string; "wide:640": string; "square:360": string; "poster:640": string; "poster:360": string; "wide:360": string; "poster-simple:128": string; "poster:128": string; "wide-square:640": string; "wide-square:360": string; }; confirmed?: undefined; optional?: undefined; tags?: undefined; days?: undefined; } | { id: string; issue: number; type: string; tags: string[]; date: string; city: string; country: string; place: string; "place-address": string; coincidence: string; lead: string; visitors: number; helpers: string[]; speakers: string[]; slots: number; links: { rsvp: string; signal: string; web?: undefined; git?: undefined; }; design: { image: string; }; images: { "wide-square": string; poster: string; "poster-simple": string; square: string; wide: string; }; thumbs: { "poster-simple:128": string; "wide:128": string; "wide-square:640": string; "wide:360": string; "wide-square:360": string; "poster:640": string; "poster-simple:360": string; "square:128": string; "square:640": string; "poster:128": string; "square:360": string; "poster-simple:640": string; "poster:360": string; "wide:640": string; "wide-square:128": string; }; confirmed?: undefined; optional?: undefined; days?: undefined; } | { id: string; type: string; date: string; days: number; city: string; country: string; coincidence: string; lead: string; helpers: string[]; visitors: number; links: { web: string; git?: undefined; rsvp?: undefined; signal?: undefined; }; design: { image: string; }; images: { poster?: undefined; wide?: undefined; square?: undefined; "wide-square"?: undefined; "poster-simple"?: undefined; }; thumbs: { "poster:360"?: undefined; "poster:640"?: undefined; "poster:128"?: undefined; "square:128"?: undefined; "wide-square:128"?: undefined; "square:640"?: undefined; "wide-square:640"?: undefined; "poster-simple:360"?: undefined; "square:360"?: undefined; "poster-simple:128"?: undefined; "wide:640"?: undefined; "wide-square:360"?: undefined; "wide:360"?: undefined; "poster-simple:640"?: undefined; "wide:128"?: undefined; }; place?: undefined; "place-address"?: undefined; confirmed?: undefined; slots?: undefined; speakers?: undefined; issue?: undefined; optional?: undefined; tags?: undefined; } | { id: string; issue: number; type: string; date: string; city: string; country: string; coincidence: string; lead: string; visitors: number; helpers: string[]; slots: number; links: { rsvp: string; web?: undefined; git?: undefined; signal?: undefined; }; speakers: string[]; design: { image: string; }; images: { square: string; "wide-square": string; wide: string; poster: string; "poster-simple": string; }; thumbs: { "wide:128": string; "wide:360": string; "poster-simple:360": string; "wide:640": string; "poster:360": string; "wide-square:640": string; "poster-simple:128": string; "wide-square:360": string; "square:640": string; "square:128": string; "square:360": string; "wide-square:128": string; "poster-simple:640": string; "poster:128": string; "poster:640": string; }; place?: undefined; "place-address"?: undefined; confirmed?: undefined; optional?: undefined; tags?: undefined; days?: undefined; } | { id: string; issue: number; type: string; date: string; city: string; country: string; coincidence: string; slots: number; design: { image: string; }; lead: string; links: { rsvp: string; web?: undefined; git?: undefined; signal?: undefined; }; speakers: string[]; images: { poster: string; square: string; wide: string; "wide-square": string; "poster-simple": string; }; thumbs: { "poster-simple:128": string; "poster:360": string; "poster:640": string; "wide-square:640": string; "poster-simple:360": string; "wide:360": string; "square:128": string; "poster-simple:640": string; "square:640": string; "poster:128": string; "square:360": string; "wide-square:128": string; "wide-square:360": string; "wide:128": string; "wide:640": string; }; place?: undefined; "place-address"?: undefined; confirmed?: undefined; visitors?: undefined; optional?: undefined; helpers?: undefined; tags?: undefined; days?: undefined; })[]}
	 */
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