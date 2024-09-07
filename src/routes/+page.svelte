<script>
	import { markets } from '../stores/markets.js';
	import MarketCard from '../components/MarketCard.svelte';
</script>

<main>
	<h1>Markets</h1>
	{#each $markets as market}
		<a href="/{market.market_name}">
			<MarketCard name={market.market_name} description={market.market_description} />
		</a>
	{/each}
</main>

<style>
	main {
		max-width: 800px;
		margin: 0 auto;
		padding: 20px;
	}

	h1 {
		text-align: center;
		margin-bottom: 20px;
	}

	a {
		text-decoration: none;
		color: inherit;
	}
</style>
