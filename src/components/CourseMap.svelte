<!-- <script>
	import { onMount, afterUpdate } from 'svelte';
	export let path = [];

	let canvas;

	onMount(() => {
		drawMap();
	});

	afterUpdate(() => {
		drawMap();
	});

	function drawMap() {
		if (!canvas) return;

		const ctx = canvas.getContext('2d');
		const scale = 4; // Scale up for better visibility

		canvas.width = 100 * scale;
		canvas.height = 100 * scale;

		// Draw background
		ctx.fillStyle = '#f0f0f0';
		ctx.fillRect(0, 0, canvas.width, canvas.height);

		// Draw path
		if (path.length > 1) {
			ctx.strokeStyle = '#007bff';
			ctx.lineWidth = 2;
			ctx.beginPath();
			path.forEach((market, index) => {
				const [x, y] = market.coord;
				if (index === 0) {
					ctx.moveTo(x * scale, y * scale);
				} else {
					ctx.lineTo(x * scale, y * scale);
				}
			});
			ctx.stroke();
		}

		// Draw markets and labels
		path.forEach((market, index) => {
			const [x, y] = market.coord;
			ctx.fillStyle = index === 0 ? '#00ff00' : index === path.length - 1 ? '#ff0000' : '#007bff';
			ctx.beginPath();
			ctx.arc(x * scale, y * scale, 5, 0, Math.PI * 2);
			ctx.fill();

			// Draw market name
			ctx.fillStyle = '#000';
			ctx.font = '12px Arial';
			ctx.textAlign = 'center';
			ctx.fillText(market.market_name, x * scale, y * scale - 10);

			// Draw arrows
			if (index < path.length - 1) {
				const [nextX, nextY] = path[index + 1].coord;
				drawArrow(ctx, x * scale, y * scale, nextX * scale, nextY * scale);
			}
		});
	}

	function drawArrow(ctx, fromX, fromY, toX, toY) {
		const headlen = 10;
		const dx = toX - fromX;
		const dy = toY - fromY;
		const angle = Math.atan2(dy, dx);
		ctx.beginPath();
		ctx.moveTo(
			toX - headlen * Math.cos(angle - Math.PI / 6),
			toY - headlen * Math.sin(angle - Math.PI / 6)
		);
		ctx.lineTo(toX, toY);
		ctx.lineTo(
			toX - headlen * Math.cos(angle + Math.PI / 6),
			toY - headlen * Math.sin(angle + Math.PI / 6)
		);
		ctx.stroke();
	}
</script>

<canvas bind:this={canvas}></canvas>

<style>
	canvas {
		max-width: 100%;
		height: auto;
		border-radius: 20px;
	}
</style> -->

<script>
	import { onMount, afterUpdate } from 'svelte';
	export let path = [];

	let canvas;

	onMount(() => {
		drawMap();
	});

	afterUpdate(() => {
		drawMap();
	});

	function drawMap() {
		if (!canvas || path.length === 0) return;

		const ctx = canvas.getContext('2d');
		const scale = 4; // Scale up for better visibility

		canvas.width = 100 * scale;
		canvas.height = 100 * scale;

		// Draw background
		ctx.fillStyle = '#f0f0f0';
		ctx.fillRect(0, 0, canvas.width, canvas.height);

		// Draw path
		ctx.strokeStyle = '#007bff';
		ctx.lineWidth = 2;
		ctx.beginPath();
		path.forEach((market, index) => {
			const [x, y] = market.coord;
			if (index === 0) {
				ctx.moveTo(x * scale, y * scale);
			} else {
				ctx.lineTo(x * scale, y * scale);
			}
		});
		ctx.stroke();

		// Draw markets and labels
		path.forEach((market, index) => {
			const [x, y] = market.coord;
			ctx.fillStyle = index === 0 ? '#00ff00' : index === path.length - 1 ? '#ff0000' : '#007bff';
			ctx.beginPath();
			ctx.arc(x * scale, y * scale, 5, 0, Math.PI * 2);
			ctx.fill();

			// Draw market name
			ctx.fillStyle = '#000';
			ctx.font = '10px Arial';
			ctx.textAlign = 'center';
			ctx.fillText(market.market_name, x * scale, y * scale - 10);

			// Draw arrows
			if (index < path.length - 1) {
				const [nextX, nextY] = path[index + 1].coord;
				drawArrow(ctx, x * scale, y * scale, nextX * scale, nextY * scale);
			}
		});
	}

	function drawArrow(ctx, fromX, fromY, toX, toY) {
		const headlen = 10;
		const dx = toX - fromX;
		const dy = toY - fromY;
		const angle = Math.atan2(dy, dx);
		ctx.beginPath();
		ctx.moveTo(
			toX - headlen * Math.cos(angle - Math.PI / 6),
			toY - headlen * Math.sin(angle - Math.PI / 6)
		);
		ctx.lineTo(toX, toY);
		ctx.lineTo(
			toX - headlen * Math.cos(angle + Math.PI / 6),
			toY - headlen * Math.sin(angle + Math.PI / 6)
		);
		ctx.stroke();
	}
</script>

<canvas bind:this={canvas}></canvas>

<style>
	canvas {
		max-width: 100%;
		height: auto;
		border-radius: 20px;
	}
</style>
