export function calculateOptimalPath(markets) {
	if (markets.length <= 1) {
		return markets;
	}

	// Start with the first market
	const path = [markets[0]];
	const unvisited = markets.slice(1);

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
