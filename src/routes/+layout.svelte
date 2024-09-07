<script>
	import { page } from '$app/stores';
	import SplashScreen from '../components/SplashScreen.svelte';
	import FireAlertModal from '../components/FireAlertModal.svelte';
	import { initFireAlert } from '$lib/stores/fireAlert';
	import { onMount } from 'svelte';

	onMount(() => {
		initFireAlert();
	});
</script>

<SplashScreen />
<FireAlertModal />

<main>
	<slot />
</main>

<nav>
	<div class="nav-container">
		<a href="/markets" class:active={$page.url.pathname === '/markets'}>Markets</a>
		<a href="/course" class:active={$page.url.pathname === '/course'}>Course</a>
		<a href="/facilities" class:active={$page.url.pathname === '/facilities'}>편의시설</a>
	</div>
</nav>

<style>
	main {
		padding-bottom: 80px; /* Space for the navigation bar */
	}

	nav {
		position: fixed;
		bottom: 20px;
		left: 50%;
		transform: translateX(-50%);
	}

	.nav-container {
		background-color: #f8f9fa;
		display: flex;
		justify-content: space-around;
		padding: 10px 20px;
		border-radius: 30px;
		box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
		width: 300px; /* Increased width to accommodate the new link */
	}

	nav a {
		text-decoration: none;
		color: #333;
		padding: 10px 15px;
		border-radius: 20px;
		transition: background-color 0.3s;
	}

	nav a.active {
		background-color: #007bff;
		color: white;
	}
</style>
