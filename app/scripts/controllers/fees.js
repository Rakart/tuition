'use strict';

/**
 * @ngdoc function
 * @name tuitionApp.controller:FeesCtrl
 * @description
 * # FeesCtrl
 * Controller of the tuitionApp
 */
var myApp = angular.module('tuitionApp');

myApp.controller('FeesCtrl', ['$scope', function($scope){
	$scope.levels = [
  {
    'level': 'Nursery-Kindergarten', 
    'rates': {
      'part_time': '20',
      'full_time': '25',
      'moe_cert': '30'
    }
  },
  {
    'level': 'Primary 1-3', 
    'rates': {
      'part_time': '25',
      'full_time': '30',
      'moe_cert': '35'
    }
  },
  {
    'level': 'Primary 4-6', 
    'rates': {
      'part_time': '30',
      'full_time': '35',
      'moe_cert': '40'
    }
  },
  {
    'level': 'Secondary 1-2', 
    'rates': {
      'part_time': '35',
      'full_time': '40',
      'moe_cert': '45'
    }
  },
  {
    'level': 'Secondary 3-4', 
    'rates': {
      'part_time': '40',
      'full_time': '45',
      'moe_cert': '50'
    }
  },
  {
    'level': 'Junior College', 
    'rates': {
      'part_time': '45',
      'full_time': '50',
      'moe_cert': '55'
    }
  },
  {
    'level': 'Polytechnics', 
    'rates': {
      'part_time': '45',
      'full_time': '50',
      'moe_cert': '55'
    }
  },
  {
    'level': 'ITE', 
    'rates': {
      'part_time': '45',
      'full_time': '50',
      'moe_cert': '55'
    }
  },
  {
    'level': 'University', 
    'rates': {
      'part_time': '60',
      'full_time': '65',
      'moe_cert': '70'
    }
  }
];
	
}]);