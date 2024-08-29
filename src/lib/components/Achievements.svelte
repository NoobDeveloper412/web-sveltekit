<script>
	import core from '$json/core.json';
	import dbRepo from '$json/db-repo.json';

	export let eventsUpcoming, eventsPast;
</script>

<div class="middle-pane-big">
	<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w3pn-hp-grid gap-2 mt-2">
		<div class="bg-events">
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
		</div>
		<div
			class="bg-projects relative"
			data-url="https://github.com/web3privacy/web3privacy/blob/main/README.md#contents"
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
			<!-- Place this tag where you want the button to render. -->
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
		</div>
		<div class="bg-talks" data-url="/research">
			<div class="title">Research</div>
			<div class="numbers">
				<div>
					<div class="big">{core.research.length} research projects →</div>
				</div>
			</div>
		</div>
	</div>
</div>
