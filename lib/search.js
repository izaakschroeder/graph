
function search() {
	var open = [ ];
	var from = { };

	var g = { start: 0 };
	var f = { start: 0 + g[start] + h(start, goal) }

	while (!_.empty(open)) {
		var current = _.pop(open);
		if (current === goal) {
			return path;
		}

		_.forEach(neighbors(current), function(neighbor) {
			var gg = g[current] + cost(current, neighbor);
			if (!(!_.contains(open) || gg < g[neighbor]))
				return;
			from[neighbor] = current;
			g[neighbor] = gg;
			f[neighbor] = g[neighbor] + h(neighbor, goal);
			open.add(neighbor)
		});
	}

	throw new Error();
}

