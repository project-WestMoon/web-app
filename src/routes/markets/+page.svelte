<script>
	import { markets } from '../../stores/markets.js';
	import MarketCard from '../../components/MarketCard.svelte';
</script>

<div class="markets-container">
	<h1 class="fixed-header">Markets</h1>
	<div class="market-list">
		{#each $markets as market}
			<a href="/markets/{market.market_name}">
				<MarketCard name={market.market_name} description={market.market_description} />
			</a>
		{/each}
	</div>
</div>

<style>
	.markets-container {
		padding-top: 80px; /* Space for the fixed header */
	}

	.fixed-header {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		background-color: white;
		text-align: center;
		padding: 10px 0;
		z-index: 1000;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
		margin: 0;
	}

	.market-list {
		padding: 0 5px;
	}

	a {
		text-decoration: none;
		color: inherit;
	}
</style>
