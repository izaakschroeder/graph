
'use strict';

function post(trees) {
	var result = [ ];
	_.each(trees, function walk(tree) {
		_.each(tree.childNodes, walk);
		result.push(tree.nodeValue);
	});
	return result;
}
