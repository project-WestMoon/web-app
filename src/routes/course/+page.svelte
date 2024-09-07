<script>
	import { markets } from '../../stores/markets.js';
	import { calculateOptimalPath } from '../../lib/CourseCalculator.js';
	import CourseMap from '../../components/CourseMap.svelte';
	import MarketSelector from '../../components/MarketSelector.svelte';

	let selectedMarkets = [];
	let path = [];

	function updatePath(event) {
		selectedMarkets = event.detail;
		if (selectedMarkets.length > 1) {
			path = calculateOptimalPath(selectedMarkets);
		} else {
			path = [];
		}
	}
</script>

<div>
	<h1 class="fixed-header">Course</h1>

	<MarketSelector markets={$markets} bind:selectedMarkets on:change={updatePath} />

	{#if path.length > 0}
		<CourseMap {path} />

		<h2>Visit Order:</h2>
		<ol>
			{#each path as market}
				<li><a href="/markets/{market.market_name}">{market.market_name}</a></li>
			{/each}
		</ol>
	{:else}
		<p>Please select at least two markets to create a course.</p>
	{/if}
</div>

<style>
	div {
		padding: 10px;
		padding-top: 80px; /* Space for the fixed header */

		display: flex;
		flex-direction: column;
		align-items: center;
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

	h1,
	h2 {
		text-align: center;
	}

	ol {
		max-width: 600px;
		margin: 0 auto;
	}

	a {
		color: #007bff;
		text-decoration: none;
	}

	a:hover {
		text-decoration: underline;
	}
</style>
