'use strict';

/**
 * @ngdoc function
 * @name tuitionApp.controller:TestiCtrl
 * @description
 * # TestiCtrl
 * Controller of the tuitionApp
 */
var myApp = angular.module('tuitionApp');

myApp.controller('TestiCtrl', ['$scope', '$firebaseArray', '$rootScope', '$location',
    function($scope, $firebaseArray, $rootScope, $location) {
      
      var ref = new Firebase('https://sizzling-heat-4327.firebaseio.com/testimonials');
      $scope.messages = $firebaseArray(ref);
      var user = $rootScope.user;
      console.log(user);

      //ADD MESSAGE METHOD
      $scope.addMessage = function(e) {
            
        //LISTEN FOR RETURN KEY
        if (e.keyCode === 13 && $scope.msg) {

          //timestamp of message fire
          var time = Firebase.ServerValue.TIMESTAMP;

          //check if user exists
          if (user.loggedIn) {

            //add message to firebase
            $scope.messages.$add({ userEmail: user.email, body: $scope.msg, time: time });
          
            //reset message
            $scope.msg = '';
          
          } else { 

            //redirect to Tutor Login page if user doesn't exist
            $location.path('/Tutor Login');
          }
        } // end of check for message 
      };

      $scope.clearAll = function(){
      	if (user.loggedIn){
          ref.remove();
        } else {
          
          //redirect to Tutor Login page if user doesn't exist
          $location.path('/Tutor Login');
        }
      };
    }
]);