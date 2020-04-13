
'use strict';

function pre(trees) {
	var result = [ ];
	_.each(trees, function walk(tree) {
		result.push(tree.nodeValue);
		_.each(tree.childNodes, walk);
	});
	return result;
}
