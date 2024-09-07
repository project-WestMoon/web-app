<script>
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	let visible = true;

	onMount(() => {
		setTimeout(() => {
			visible = false;
		}, 1000);
	});
</script>

{#if visible}
	<div class="splash-screen" transition:fade>
		<h1>서문시장</h1>
	</div>
{/if}

<style>
	.splash-screen {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: #007bff;
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: 9999;
	}

	h1 {
		color: white;
		font-size: 3rem;
		font-weight: bold;
	}
</style>
