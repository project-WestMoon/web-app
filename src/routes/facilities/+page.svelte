<!-- <script>
	import { facilities } from '$lib/stores/facilities.js';
	import { onMount } from 'svelte';

	let userPosition = { x: 50, y: 50 }; // 사용자의 초기 위치
	let nearestToilet;
	let nearestParking;

	function calculateDistance(pos1, pos2) {
		return Math.sqrt(Math.pow(pos1.x - pos2.x, 2) + Math.pow(pos1.y - pos2.y, 2));
	}

	function getDirection(from, to) {
		const dx = to.x - from.x;
		const dy = to.y - from.y;
		const angle = (Math.atan2(dy, dx) * 180) / Math.PI;

		if (angle > -22.5 && angle <= 22.5) return '동쪽';
		if (angle > 22.5 && angle <= 67.5) return '북동쪽';
		if (angle > 67.5 && angle <= 112.5) return '북쪽';
		if (angle > 112.5 && angle <= 157.5) return '북서쪽';
		if (angle > 157.5 || angle <= -157.5) return '서쪽';
		if (angle > -157.5 && angle <= -112.5) return '남서쪽';
		if (angle > -112.5 && angle <= -67.5) return '남쪽';
		if (angle > -67.5 && angle <= -22.5) return '남동쪽';
	}

	onMount(() => {
		nearestToilet = {
			...$facilities.toilet,
			distance: calculateDistance(userPosition, $facilities.toilet),
			direction: getDirection(userPosition, $facilities.toilet)
		};

		nearestParking = {
			...$facilities.parking,
			distance: calculateDistance(userPosition, $facilities.parking),
			direction: getDirection(userPosition, $facilities.parking)
		};
	});
</script>

<div>
	<h1 class="fixed-header">편의시설</h1>

	<h2>가장 가까운 화장실</h2>
	{#if nearestToilet}
		<p>{nearestToilet.name}</p>
		<p>거리: 약 {nearestToilet.distance.toFixed(2)} 단위</p>
		<p>방향: {nearestToilet.direction}</p>
	{/if}

	<h2>가장 가까운 주차장</h2>
	{#if nearestParking}
		<p>{nearestParking.name}</p>
		<p>거리: 약 {nearestParking.distance.toFixed(2)} 단위</p>
		<p>방향: {nearestParking.direction}</p>
	{/if}
</div>

<style>
	div {
		padding: 15px;
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

	h1,
	h2 {
		color: #333;
	}

	p {
		margin: 5px 0;
	}
</style> -->

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
