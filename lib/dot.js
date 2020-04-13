
var _ = require('lodash');

function toDot(vertices, edges) {
	function q(x) {
		return '"' + x + '"';
	}
	var output = '\n';
	output += 'graph [truecolor="true";bgcolor="transparent"; rankdir="LR"];';
	output += _.chain(vertices)
		.map(function(vertex, i) {
			var prefix = 'node [shape=circle];' + q(vertex) + ';';

			return _.chain(edges(vertex))
				.map(function(edge) {
					return '' + q(vertex) + ' -> ' + q(edge.destination) +
						' [ label = '  + q(edge.edge) +  ']' + ';';
				})
				.join('\n')
				.value();
		})
		.join('\n')
		.value();

	return 'digraph G {' + output + ' }';
}

module.exports = toDot;
