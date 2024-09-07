import { writable } from 'svelte/store';

export const fireAlert = writable(false);

let eventSource;

export function initFireAlert() {
	if (typeof window !== 'undefined') {
		eventSource = new EventSource('/api/fire');

		eventSource.onmessage = (event) => {
			const data = JSON.parse(event.data);
			if (data.type === 'fire-alert') {
				fireAlert.set(true);
			}
		};

		eventSource.onerror = (error) => {
			console.error('EventSource failed:', error);
			eventSource.close();
		};
	}
}

export function closeFireAlert() {
	fireAlert.set(false);
}
