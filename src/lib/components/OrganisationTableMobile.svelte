<script>
	// @ts-ignore
	import config from '$json/config.yaml';
</script>

<div class="border-2 border-white flex flex-col">
	<div class="px-[16px] py-[18px] flex flex-col gap-4 border-b border-white">
		<p class="text-white font-bold uppercase">EVENTS</p>
		<div class="w-full flex flex-col items-start">
			{#each config.organisation.table.events as item}
				<p class="text-white">{item.objective}</p>
				<p>{item.details}</p>
				{#if item.url}
					<a class="button inverted mb-4" href={item.url}>
						<button>MORE</button>
					</a>
				{/if}
			{/each}
		</div>
	</div>

	<div class="px-[16px] py-[18px] flex flex-col gap-4 border-b border-white h-full">
		<p class="text-white font-bold uppercase">RESEARCH</p>
		<div class="w-full flex flex-col items-start">
			{#each config.organisation.table.research as item}
				<p class="text-white">{item.objective}</p>
				<p>{item.details}</p>
				{#if item.url}
					<a class="button inverted mb-4" href={item.url}>
						<button>MORE</button>
					</a>
				{/if}
			{/each}
		</div>
	</div>

	<div class="px-[16px] py-[18px] flex flex-col gap-4 border-b border-white">
		<p class="text-white font-bold uppercase">TOOLS</p>
		<div class="w-full flex flex-col items-start">
			{#each config.organisation.table.tools as item}
				<p class="text-white">{item.objective}</p>
				<p>{item.details}</p>
				{#if item.url}
					<a class="button inverted mb-4" href={item.url}>
						<button>MORE</button>
					</a>
				{/if}
			{/each}
		</div>
	</div>

	<div class="px-[16px] py-[18px] flex flex-col gap-4 border-b border-white">
		<p class="text-white font-bold uppercase">EDUCATION</p>
		<div class="w-full flex flex-col items-start">
			{#each config.organisation.table.education as item}
				<p class="text-white">{item.objective}</p>
				<p>{item.details}</p>
				{#if item.url}
					<a class="button inverted mb-4" href={item.url}>
						<button>MORE</button>
					</a>
				{/if}
			{/each}
		</div>
	</div>
</div>
