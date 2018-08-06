'use strict';

angular.module('myApp.basket', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/basket', {
    templateUrl: 'basket/basket.html',
    controller: 'basketCtrl'
  });
}])

.controller('basketCtrl', function($scope, $rootScope) {
    $rootScope.shopCart = {};
    if(localStorage.getItem('shopCart')) {
      $rootScope.shopCart =  JSON.parse(localStorage.getItem('shopCart'));
    }

    $rootScope.calcMainSumm = function () {
        $rootScope.shopCart.mainSumm = 0;
        for (let item of $rootScope.shopCart) {
            $rootScope.shopCart.mainSumm = $rootScope.shopCart.mainSumm + item.amount * item.price;
        }
    }
    if(localStorage.getItem('shopCart')) {
        $rootScope.calcMainSumm();
    }

    $rootScope.incItem = function () {
        let item = this.$parent.orderItem;
        item.amount = ((item.amount + 1) > item.available) ? item.amount : item.amount + 1;
        $rootScope.calcMainSumm();
    }
    $rootScope.decItem = function () {
        let item = this.$parent.orderItem;
        item.amount = ((item.amount - 1) > -1) ? item.amount - 1 : item.amount;
        $rootScope.calcMainSumm();
    }

    $scope.sendOrder = function() {
      let data = [];
          for (let item of $scope.shopCart) {
            if (item.amount > 0) {
              data.push({
                  goodId: item.goodId,
                  name: item.name,
                  price: item.price,
                  amount: item.amount
              });
            }
          }
          console.log(data);
        // $scope.sendData(url, data);
    }
});