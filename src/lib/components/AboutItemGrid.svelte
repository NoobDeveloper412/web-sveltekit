<script>
	import AboutItem from '$components/AboutItem.svelte';

	// Data for platform items
	const platformItems = [
		{
			icon: 'query_stats',
			title: 'Market stats',
			description: 'Like Crunchbase, but free forever'
		},
		{
			icon: 'star_half',
			title: 'Privacy Ranking',
			description: 'Scoring and review of current privacy projects'
		},
		{
			icon: 'school',
			title: 'Academy',
			description: 'Education for general public on how to reach privacy'
		},
		{
			icon: 'experiment',
			title: 'Research',
			description: 'Annual reports, Frameworks, Tools, Books'
		},
		{
			icon: 'database',
			title: 'Data',
			description: 'For Projects, Use-case list, Market & Funding info'
		}
	];

	// Data for activation items
	const activationItems = [
		{
			icon: 'visibility_lock',
			title: 'Advocacy',
			description: 'Branding “decentralization = privacy”'
		},
		{ icon: 'calendar_today', title: 'Events', description: 'Meetups, Summits, Hackathons, Camps' },
		{
			icon: 'group_work',
			title: 'Ecosystems collaboration',
			description: 'Networks, Alliances, Media'
		},
		{
			icon: 'encrypted',
			title: 'Standardisation',
			description: 'Privacy-features, security audit (example)'
		},
		{
			icon: 'local_florist',
			title: 'Incubation',
			description: 'Product managers facilitation, Business sustainability'
		}
	];

	// Data for goal sections
	const goalSections = [
		{ title: 'GENERAL PUBLIC', goals: ['Millions of educated users', 'Higher privacy culture'] },
		{ title: 'PROJECTS', goals: ['Better privacy features', 'New use-cases', 'Efficient demos'] },
		{
			title: 'SECURITY AUDIT COMPANIES',
			goals: ['New “privacy audit” category', 'Significant growth of audited projects.']
		},
		{ title: 'DEVELOPERS', goals: ['More devs building privacy', 'More sustainable projects.'] },
		{ title: 'STARTUPERS', goals: ['More privacy-oriented projects', 'Longer runway'] }
	];
</script>

<div>
	<AboutItem
		title="AUDIENCES"
		subtext="For all of them we are building a private platform to discuss and build privacy tooling and research"
	>
		<div class="w-full grid grid-cols-2">
			<div class="flex flex-col gap-[8px] text-white font-bold">
				<span>General public</span>
				<span>Projects</span>
				<span>Startupers</span>
			</div>
			<div class="flex flex-col gap-[8px] text-white font-bold">
				<span>Developers</span>
				<span>Audit companies</span>
				<span>Investors</span>
			</div>
		</div>
	</AboutItem>

	<AboutItem
		title="PLATFORM"
		subtext="We need to create activation points, that will push community around privacy forward and establish new connections"
	>
		<div class="flex flex-col gap-[8px] items-start">
			{#each platformItems as platformItem}
				<div class="flex gap-[12px] md:items-center items-start w-full">
					<img src={`/icons/${platformItem.icon}.svg`} class="inline-block" />
					<div class="flex md:flex-row flex-col md:items-center md:gap-[12px] w-full">
						<span class="font-bold text-white leading-[1rem] w-full max-w-[140px]"
							>{platformItem.title}</span
						>
						<span class="md:block hidden">-</span>
						<span class="text-[1rem] w-full">{platformItem.description}</span>
					</div>
				</div>
			{/each}
		</div>
	</AboutItem>

	<AboutItem
		title="ACTIVATIONS"
		subtext="With all of that we want to focus everybody more on web3 related privacy issues, those are our estimates and long-term goals"
	>
		<div class="flex flex-col gap-[8px] items-start">
			{#each activationItems as activationItem}
				<div class="flex gap-[12px] md:items-center items-start w-full">
					<img src={`/icons/${activationItem.icon}.svg`} class="inline-block" />
					<div class="flex md:flex-row flex-col md:items-center md:gap-[12px] w-full">
						<span class="font-bold text-white leading-[1rem] w-fit max-w-[140px]"
							>{activationItem.title}</span
						>
						<span class="md:block hidden">-</span>
						<span class="text-[1rem] w-full">{activationItem.description}</span>
					</div>
				</div>
			{/each}
		</div>
	</AboutItem>

	<AboutItem variant="secondary" title="GOALS">
		<div class="flex md:flex-row flex-col gap-[32px]">
			{#each goalSections as goalSection}
				<div class="flex flex-col gap-[16px]">
					<div class="flex flex-col gap-[4px]">
						<span class="font-bold text-white my-2 leading-[1rem] uppercase"
							>{goalSection.title}</span
						>
						<ul class="list-decimal ml-[18px]">
							{#each goalSection.goals as goal}
								<li>{goal}</li>
							{/each}
						</ul>
					</div>
				</div>
			{/each}
		</div>
	</AboutItem>
</div>
