export function calculateOptimalPath(markets) {
	// Select a subset of markets (e.g., 5 random markets)
	const selectedMarkets = markets.sort(() => 0.5 - Math.random()).slice(0, 5);

	// Simplified nearest neighbor algorithm
	const path = [selectedMarkets[0]];
	const unvisited = selectedMarkets.slice(1);

	while (unvisited.length > 0) {
		const current = path[path.length - 1];
		let nearest = unvisited[0];
		let minDistance = distance(current.coord, nearest.coord);

		for (let i = 1; i < unvisited.length; i++) {
			const d = distance(current.coord, unvisited[i].coord);
			if (d < minDistance) {
				nearest = unvisited[i];
				minDistance = d;
			}
		}

		path.push(nearest);
		unvisited.splice(unvisited.indexOf(nearest), 1);
	}

	return path;
}

function distance(coord1, coord2) {
	return Math.sqrt(Math.pow(coord1[0] - coord2[0], 2) + Math.pow(coord1[1] - coord2[1], 2));
}
