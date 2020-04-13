
'use strict';

var _ = require('lodash');

function prune(trees, by) {
	return _.chain(trees)
		.filter(function(tree) {
			return by(tree.nodeValue);
		})
		.map(function(tree) {
			return {
				nodeValue: tree.nodeValue,
				childNodes: prune(tree.childNodes, by)
			};
		})
		.value();
}

module.exports = prune;
