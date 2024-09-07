<script>
	import MarketCard from '../../components/MarketCard.svelte';
</script>

<div class="facilities-container">
	<div class="facilities-list">
		<h1 class="fixed-header">편의시설</h1>

		<a href="/facilities/restroom">
			<MarketCard name='근처 화장실' description='' />
		</a>
		<a href="/facilities/park">
			<MarketCard name='근처 주차장' description='' />
		</a>
	</div>
</div>

<style>
	.facilities-container {
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

	.facilities-list {
		padding: 0 5px;
	}

	a {
		text-decoration: none;
		color: inherit;
	}
</style>
