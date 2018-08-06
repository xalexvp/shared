'use strict';

angular.module('myApp', [
  'ngRoute',
  // 'myApp.goodsload',
  'myApp.grocery',
  'myApp.basket',
  'myApp.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/grocery'});

}]);
