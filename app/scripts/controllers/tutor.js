'use strict';

/**
 * @ngdoc function
 * @name tuitionApp.controller:TutorCtrl
 * @description
 * # TutorCtrl
 * Controller of the tuitionApp
 */
var myApp = angular.module('tuitionApp');

/* controller that logs the user in */ 
myApp.controller('TutorCtrl',  ['$scope', '$firebaseArray', '$rootScope', function ($scope, $firebaseArray, $rootScope) {
  
  //create firebase entry @ /acccess and sets 'users' to hold the values
  var ref = new Firebase('https://sizzling-heat-4327.firebaseio.com/access');
  $scope.users = $firebaseArray(ref);

//login to facebook
$scope.login = function() {
    ref.authWithOAuthPopup('facebook', function(error, authData) {
      if (error) {
        console.log('Login Failed!', error);
        
      } else if (authData) {
        $rootScope.user = { //sets the user.data to be the entire authData object
          'data': authData
        };
        
        $scope.users.$add({userID: authData.uid, name: authData.facebook.displayName}); // adds part of the authData to the users array in firebase
        console.log('Logged in as User ID: ' + authData.facebook.displayName + ', Provider: ' + authData.provider);
        console.log(authData);
        
      } else {
        console.log('user is logged out');
      }
      
    });
};

//logout
  $scope.logout = function() {
    var scope = $rootScope; 
    ref.unauth(function() { // when the firebase is unauth, the user is logged out 
      scope.user = null;  // sets the current user to null
      console.log('User was logged out');
      $rootScope.user = scope.user; // returns the current user to the global $rootScope
    });
  };
}]);

