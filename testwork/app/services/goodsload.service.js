'use strict';

angular.
  module('goodsload').
  factory('Goodsload', ['$resource',
    function($resource) {
      return $resource('base/:goodId.json', {}, {
        query: {
          method: 'GET',
          params: {goodId: 'goods'},
          isArray: true
        }
      });
    }
  ]);
