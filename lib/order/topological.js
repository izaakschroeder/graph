
'use strict';

var reverse = require('lodash/reverse'),
	post = require('./post');

function topological(trees) {
	return reverse(post(trees));
}

module.exports = topological;
