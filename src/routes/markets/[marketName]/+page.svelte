<script>
	import { page } from '$app/stores';
	import { markets } from '../../../stores/markets.js';

	$: marketName = $page.params.marketName;
	$: market = $markets.find((m) => m.market_name === marketName);
</script>

<div>
	{#if market}
		<h1>{market.market_name}</h1>
		<p>{market.market_description}</p>

		<h2>Reviews</h2>
		<ul>
			{#each market.reviews as review}
				<li>{review}</li>
			{/each}
		</ul>
	{:else}
		<p>Market not found</p>
	{/if}

	<a href="/markets">Back to Markets</a>
</div>

<style>
	div {
		padding: 20px;
	}

	h1,
	h2 {
		color: #333;
	}

	ul {
		list-style-type: none;
		padding: 0;
	}

	li {
		margin-bottom: 10px;
		padding: 10px;
		background-color: #f8f9fa;
		border-radius: 5px;
	}

	a {
		display: inline-block;
		margin-top: 20px;
		color: #007bff;
		text-decoration: none;
	}

	a:hover {
		text-decoration: underline;
	}
</style>
