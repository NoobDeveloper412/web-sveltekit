<script>
	// @ts-ignore
	import config from '$json/config.yaml';
</script>

<div class="border-2 border-white flex flex-col">
	<div class="w-full bg-white px-[16px] justify-between flex py-[px] gap-4 items-start uppercase">
		<div class="max-w-[120px] w-full">
			<p class="text-black">CATEGORY</p>
		</div>
		<div class="max-w-[264px] w-full">
			<p class="text-black">Objective</p>
		</div>
		<div class="max-w-[490px] w-full">
			<p class="text-black">Details</p>
		</div>
		<div class="max-w-[120px] w-full">
			<p class="text-black">More info</p>
		</div>
	</div>

	{#each config.organisation.table.events as item}
		<div class="px-[16px] py-[24px] flex justify-between items-start gap-4 border-b border-white">
			<div class="max-w-[120px] w-full">
				<p class="text-white font-bold uppercase">Events</p>
			</div>
			<div class="max-w-[264px] w-full flex flex-col gap-2 items-start">
				<p class="text-white" style="height:{item.height}px">{item.objective}</p>
			</div>
			<div class="max-w-[490px] w-full flex flex-col gap-2 items-start">
				<p style="height:{item.height}px">{item.details}</p>
			</div>
			<div class="max-w-[120px] w-full self-end flex flex-col gap-2 items-center">
				{#if item.url}
					<a class="button inverted" style="height:{item.height}px" href={item.url}>
						<button>MORE</button>
					</a>
				{/if}
			</div>
		</div>
	{/each}

	{#each config.organisation.table.research as item}
		<div class="px-[16px] py-[24px] flex justify-between items-start gap-4 border-b border-white">
			<div class="max-w-[120px] w-full">
				<p class="text-white font-bold uppercase">RESEARCH</p>
			</div>
			<div class="max-w-[264px] w-full flex flex-col gap-2 items-start">
				<p class="text-white" style="height:{item.height}px">{item.objective}</p>
			</div>
			<div class="max-w-[490px] w-full flex flex-col gap-2 items-start">
				<p style="height:{item.height}px">{item.details}</p>
			</div>
			<div class="max-w-[120px] w-full flex flex-col gap-2 items-center">
				{#if item.url}
					<a class="button inverted" style="height:{item.height}px" href={item.url}>
						<button>MORE</button>
					</a>
				{:else}
					<p style="height:{item.height}px" class="text-white">&nbsp;</p>
				{/if}
			</div>
		</div>
	{/each}

	{#each config.organisation.table.tools as item}
		<div class="px-[16px] py-[24px] flex items-start justify-between gap-4 border-b border-white">
			<div class="max-w-[120px] w-full">
				<p class="text-white font-bold uppercase">TOOLS</p>
			</div>
			<div class="max-w-[264px] w-full flex flex-col gap-2 items-start">
				<p class="text-white" style="height:{item.height}px">{item.objective}</p>
			</div>
			<div class="max-w-[490px] w-full flex flex-col gap-2 items-start">
				<p style="height:{item.height}px">{item.details}</p>
			</div>
			<div class="max-w-[120px] w-full flex flex-col gap-2 items-center">
				{#if item.url}
					<a class="button inverted" style="height:{item.height}px" href={item.url}>
						<button>MORE</button>
					</a>
				{/if}
			</div>
		</div>
	{/each}

	{#each config.organisation.table.education as item}
		<div class="px-[16px] py-[24px] flex items-start justify-between gap-4 border-b border-white">
			<div class="max-w-[120px] w-full">
				<p class="text-white font-bold uppercase">EDUCATION</p>
			</div>
			<div class="max-w-[264px] w-full flex flex-col gap-2 items-start">
				<p class="text-white" style="height:{item.height}px">{item.objective}</p>
			</div>
			<div class="max-w-[490px] w-full flex flex-col gap-2 items-start">
				<p style="height:{item.height}px">{item.details}</p>
			</div>
			<div class="max-w-[120px] w-full flex flex-col gap-2 items-center">
				{#if item.url}
					<a class="button inverted" style="height:{item.height}px" href={item.url}>
						<button>MORE</button>
					</a>
				{:else}
					<p style="height:{item.height}px" class="text-white">&nbsp;</p>
				{/if}
			</div>
		</div>
	{/each}
</div>
