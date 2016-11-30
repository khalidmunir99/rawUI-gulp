/* global define */
define([
	'application/scope',
], function (scope) {
	'use strict';
		var d = document.getElementById('test');
	d.innerHTML=scope.id + $.fn.jquery +  _.now().toString();
	return scope;
});
