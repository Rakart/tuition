/* global Firebase */
/// <reference path="../../../typings/angularjs/angular.d.ts"/>

'use strict';

/**
 * @ngdoc function
 * @name tuitionApp.controller:AuthCtrl
 * @description
 * # AuthCtrl
 * Controller of the tuitionApp
 */
var myApp = angular.module('tuitionApp');

myApp.controller('AuthCtrl', ['$scope', '$rootScope', '$location', 'Login',  function($scope, $rootScope, $location, Login) {

	//Register as User
	$scope.register = function(user) {
		var ref = new Firebase('https://sizzling-heat-4327.firebaseio.com');
		ref.createUser({
			email: user.email,
			password: user.password, 
		}, function(error, userData) {
			if (error) {
				console.log('Error creating user:', error);
			} else {
				console.log('Successfully created user account with uid:', userData.uid);

				//creates an entry of the new user inside firebase
				var usersRef = ref.child('users');

				//updates the user array with user.username as the key
				usersRef.child(user.username).set({
				  	username: Login.getUsername(user),
				    password: user.password,
				    email: user.email
				});
			};
		});
	};

	//Login as existing User
	$scope.login = function(user) {

		$scope.user.loggedIn = false;

		var ref = new Firebase('https://sizzling-heat-4327.firebaseio.com');
		ref.authWithPassword({
		  email    : user.email,
		  password : user.password,
		}, function(error, authData) {
		  if (error) {
		    console.log('Login Failed!', error);
		    $scope.user.loggedIn = false;

		  } else {
		    console.log('Authenticated successfully with payload:', authData);
		    
		    $scope.$watch('user.loggedIn', function(){
				$location.path('/');
			});

		    //sets the user to be loggedIn
		    $scope.user.loggedIn = true;

		    //sets the user available to $rootScope
		    $rootScope.user = user;
		  }
		});
	};

}]);

myApp.service('Login', function(){
	
	this.getUsername = function(user){
		var username = user.username;
		return username;
	}
});







