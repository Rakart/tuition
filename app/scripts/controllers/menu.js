'use strict';

/**
 * @ngdoc function
 * @name tuitionApp.controller:menuCtrl
 * Controller of the tuitionApp
 */
var myApp = angular.module('tuitionApp');

myApp.controller('MenuCtrl', ['$scope', function ($scope) {
    
    $scope.menuItems = ['Home', 'Contact', 'Fees', 'Services', 'Testimonials', 'Tutor Login'];
    
    $scope.select = function(index) {
      $scope.selected = index;
    };
    
}]);
