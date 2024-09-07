<script>
	import { page } from '$app/stores';
	$: marketName = $page.params.facilityName;
</script>

<div>
    {#if $page.params.facilityName == "restroom"}
		<h1>근처 화장실</h1>
		<p>좌측 300m</p>
	{:else if $page.params.facilityName == "park"}
    <h1>근처 주차장</h1>
    <p>우측 150m</p>
	{/if}

	<a href="/facilities">Back to 편의시설</a>
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
