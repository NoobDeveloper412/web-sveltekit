<script lang="ts">
	import { personLink } from '$utils/core';
	import { getSpeakerImage } from '$utils/events';

	export let items = [];
	export let limit = 7;
	export let size = 'w-8 h-8';
</script>

<div class="">
	<div class="flex -space-x-3 flex-wrap">
		{#each items.slice(0, limit).filter((p) => p) as p}
			<div class="hover:z-0">
				<a href={personLink(p)} class="aspect-square inline-block {size}">
					<img
						src={getSpeakerImage(p, '64')}
						class="w-full aspect-square object-cover rounded-full border-gray-800 border-2 hover:border-white"
						alt={p.name}
						title={p.name}
					/>
				</a>
			</div>
		{/each}
		{#if items.length > limit}
			<div
				class="flex items-center justify-center rounded-full aspect-square border-2 border-gray-800 bg-gray-800 text-xs {size}"
			>
				+{items.length - limit}
			</div>
		{/if}
	</div>
</div>
