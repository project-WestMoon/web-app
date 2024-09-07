<script>
	export let name;
	export let description;
</script>

<div class="market-card">
	<h2>{name}</h2>
	<p>{description}</p>
</div>

<style>
	.market-card {
		background-color: #f0f0f0;
		border-radius: 8px;
		padding: 16px;
		margin-left: 10px;
		margin-right: 10px;
		margin-bottom: 16px;
		cursor: pointer;
		transition: background-color 0.3s ease;
	}

	.market-card:hover {
		background-color: #e0e0e0;
	}

	h2 {
		margin: 0 0 8px 0;
	}

	p {
		margin: 0;
	}
</style>
