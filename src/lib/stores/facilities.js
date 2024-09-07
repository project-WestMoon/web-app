import { writable } from 'svelte/store';

const facilitiesData = {
	toilet: { x: 30, y: 70, name: '공용 화장실' },
	parking: { x: 80, y: 20, name: '주차장' }
};

export const facilities = writable(facilitiesData);
