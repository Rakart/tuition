'use strict';

/**
 * @ngdoc function
 * @name tuitionApp.controller:ContactCtrl
 * @description
 * # ContactCtrl
 * Controller of the tuitionApp
 */
var myApp = angular.module('tuitionApp');

myApp.controller('ContactCtrl', ['$scope', function($scope){
	$scope.contacts = [
		{
		'name': 'Facebook',
		'linkUrl':  'http://www.facebook.com/tuitionify',
		'imageUrl': ''		
	}, {
		'name': 'Twitter',
		'linkUrl':  'http://www.twitter.com',
		'imageUrl': ''
	}, {
		'name': 'Email',
		'linkUrl':  'mailto:angeline.tanjt@gmail.com',
		'imageUrl': ''
	}, {
		'name': 'YouTube',
		'linkUrl':  'YouTube',
		'imageUrl': ''
	}, {
		'name': 'Instagram',
		'linkUrl':  'http://www.instagram.com',
		'imageUrl': ''
	}, {
		'name': 'WhatsApp',
		'linkUrl':  'http://web.whatsapp.com',
		'imageUrl': ''
	}];
}]);