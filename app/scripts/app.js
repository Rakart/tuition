'use strict';

/**
 * @ngdoc overview
 * @name tuitionApp
 * @description
 * # tuitionApp
 *
 * Main module of the application.
 */
var myApp = angular
  .module('tuitionApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'firebase'
  ]);
  
myApp.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/main.html',
      controller: 'MainCtrl'
    })
    .when('/Contact', {
      templateUrl: 'views/contact.html',
      controller: 'ContactCtrl'
    })
    .when('/Fees', {
      templateUrl: 'views/fees.html',
      controller: 'FeesCtrl'
    })
    .when('/Services', {
      templateUrl: 'views/services.html',
      controller: 'ServicesCtrl'
    })
    .when('/Testimonials', {
      templateUrl: 'views/testimonial.html',
      controller: 'TestiCtrl'
    })
    .when('/Tutor Login', {
      templateUrl: 'views/login.html',
      controller: 'AuthCtrl'
    })
    .when('/Signup', {
      templateUrl: 'views/signup.html',
      controller: 'AuthCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
});