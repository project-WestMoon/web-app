<script>
	import { createEventDispatcher } from 'svelte';

	export let markets = [];
	export let selectedMarkets = [];

	const dispatch = createEventDispatcher();

	function toggleMarket(market) {
		const index = selectedMarkets.findIndex((m) => m.market_name === market.market_name);
		if (index === -1) {
			selectedMarkets = [...selectedMarkets, market];
		} else {
			selectedMarkets = selectedMarkets.filter((m) => m.market_name !== market.market_name);
		}
		dispatch('change', selectedMarkets);
	}
</script>

<div class="market-selector">
	{#each markets as market}
		<label>
			<input
				type="checkbox"
				checked={selectedMarkets.some((m) => m.market_name === market.market_name)}
				on:change={() => toggleMarket(market)}
			/>
			{market.market_name}
		</label>
	{/each}
</div>

<style>
	.market-selector {
		display: flex;
		flex-wrap: wrap;
		gap: 10px;
		margin-bottom: 20px;

		justify-content: center;
	}

	label {
		display: flex;
		align-items: center;
		gap: 5px;
		cursor: pointer;
	}
</style>
