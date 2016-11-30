/* global define */
define([
	'application/scope',
	'jquery',
	'underscore'
], function (scope, $,underscore) {
	'use strict';
	console.log('\'Allo \'Allo!', scope.id, $.fn.jquery, _);
	var d = document.getElementById('test');

	d.innerHTML=scope.id + $.fn.jquery +  _.now().toString();
	return scope;
});
