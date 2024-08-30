<script lang="ts">
	export let title: string;
	export let subtext: string = "";
	export let variant: 'primary' | 'secondary' = 'primary';
</script>

<div>
	<div
		class="border-2 border-white w-full p-[24px] relative text-[1rem] {variant === 'secondary'
			? 'border-dashed border-[#909090]'
			: ''}"
	>
		<span
			class="absolute bg-black z-10 top-[-20px] px-[12px] uppercase text-[1rem] {variant ===
			'secondary'
				? 'text-[#909090]'
				: 'text-white'} font-bold"
		>
			{title}
		</span>
		<slot />
	</div>
	{#if subtext}
		<div class="px-[34px] py-[16px]">
			<div class="flex gap-[22px] items-start h-full justify-center mb-[12px]">
				<img src="arrow.svg" class="inline-block min-h-full w-[1rem] self-start" />
				<span class="text-[1rem] leading-[1.3rem]">{subtext}</span>
			</div>
		</div>
	{/if}
</div>
