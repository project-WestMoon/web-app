<script>
	import { fireAlert, closeFireAlert } from '$lib/stores/fireAlert';
	import { onMount } from 'svelte';

	let modalElement;

	function handleKeydown(event) {
		if (event.key === 'Escape') {
			closeFireAlert();
		}
	}

	onMount(() => {
		if (modalElement) {
			modalElement.focus();
		}
	});
</script>

{#if $fireAlert}
	<div
		bind:this={modalElement}
		role="dialog"
		aria-modal="true"
		tabindex="-1"
		class="modal-backdrop"
		on:keydown={handleKeydown}
	>
		<div class="modal-content">
			<h2>화재 경보</h2>
			<p>화재가 감지되었습니다. 신속히 대피하세요!</p>
			<button on:click={closeFireAlert}>확인</button>
		</div>
	</div>
{/if}

<style>
	.modal-backdrop {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.5);
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: 1000;
	}

	.modal-content {
		background-color: white;
		padding: 20px;
		border-radius: 5px;
		text-align: center;
	}

	h2 {
		color: red;
	}

	button {
		margin-top: 10px;
		padding: 5px 10px;
		background-color: #007bff;
		color: white;
		border: none;
		border-radius: 3px;
		cursor: pointer;
	}
</style>
