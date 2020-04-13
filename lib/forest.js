
'use strict';

function forest(nodes, walk) {
	var seen = new WeakSet();
	function _dff(nodes) {
		return _.reduce(nodes, function(result, node) {
			if (seen.has(node)) {
				return result;
			} else {
				seen.add(node);
				return result.concat(walk(node, _dff);
			}
		}, []);
	}
	return _dff(nodes);
}

module.exports = forest;
