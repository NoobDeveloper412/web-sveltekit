<script>
	import contributors from '$json/contributors.json';
	import config from '$json/config.yaml';
	import core from '$json/core.json';

	function personLink(person) {
		return person.refs?.twitter
			? `https://twitter.com/${person.refs.twitter}`
			: person.refs?.bsky
				? `https://bsky.app/profile/${person.refs.bsky}`
				: '#';
	}
</script>

<div class="mt-16">
	<h1>
		<a href="https://docs.web3privacy.info/get-involved">Join the Community</a>
	</h1>
	<div>{@html config.landing.community}</div>

	<h2 class="my-6">Speakers</h2>
	<div class="flex gap-3 flex-wrap items-center">
		{#each core.people
			.filter((p) => !core.teams['core-team'].includes(p.id))
			.filter((p) => p.imageUrl) as person}
			<div>
				<a href={personLink(person)}>
					<img src={person.imageUrl} title={person.name} class="w-14 rounded-full aspect-square" />
				</a>
			</div>
		{/each}
	</div>

	<div class="flex gap-3 lg:gap-6 pt-4 flex-wrap mt-4 mb-14">
		<a href={core.links.cfp} class="button inverted">
			<button>Submit your proposal (CfP)</button>
		</a>
	</div>

	<h2 class="my-6">Git Contributors</h2>
	<div class="flex gap-3 flex-wrap mb-4 items-center">
		{#each contributors.items as contrib}
			<div>
				<a href={contrib.html_url} target="_blank" title={contrib.login}>
					<img src={contrib.avatar_url} class="w-14 rounded-full aspect-square" />
				</a>
			</div>
		{/each}
	</div>

	<div class="flex gap-4 lg:gap-6 pt-4 flex-wrap">
		<a href={core.links.telegram} class="button inverted">
			<button>Telegram</button>
		</a>
		<a href={core.links.signal} class="button inverted">
			<button>Signal</button>
		</a>
		<a href={core.links.matrix} class="button inverted">
			<button>Matrix Hub</button>
		</a>
	</div>
</div>
