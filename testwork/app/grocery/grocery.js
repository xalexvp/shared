'use strict';

angular.module('myApp.grocery', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/grocery', {
    templateUrl: 'grocery/grocery.html',
    controller: 'groceryCtrl'
  });
}])
.controller('groceryCtrl', function($scope, $controller) {
    $controller('basketCtrl', {$scope: $scope});

    let goods = [
        {   age: 0,
            goodId: "motorola-xoom-with-wi-fi",
            name: "Motorola XOOM\u2122 with Wi-Fi",
            snippet: "The Next, Next Generation\r\n\r\nExperience the future with Motorola XOOM with Wi-Fi, the world's first tablet powered by AndrogoodId 3.0 (Honeycomb).",
            available: 20,
            price: 15
        },
        {   age: 1,
            goodId: "motorola-xoom",
            imageUrl: "img/phones/motorola-xoom.0.jpg",
            name: "MOTOROLA XOOM\u2122",
            snippet: "The Next, Next Generation\n\nExperience the future with MOTOROLA XOOM, the world's first tablet powered by AndrogoodgoodId 3.0 (Honeycomb).",
            available: 25,
            price: 20
        },
        {   age: 2,
            carrier: "AT&T",
            goodId: "motorola-atrix-4g",
            name: "MOTOROLA ATRIX\u2122 4G",
            snippet: "MOTOROLA ATRIX 4G the world's most powerful smartphone.",
            available: 15,
            price: 25
        },
        {   age: 3,
            goodId: "dell-streak-7",
            name: "Dell Streak 7",
            snippet: "Introducing Dell\u2122 Streak 7. Share photos, vgoodIdeos and movies together. It\u2019s small enough to carry around, big enough to gather around.",
            available: 5,
            price: 28
        },
        {   age: 4,
            carrier: "Cellular South",
            goodId: "samsung-gem",
            name: "Samsung Gem\u2122",
            snippet: "The Samsung Gem\u2122 brings you everything that you would expect and more from a touch display smart phone \u2013 more apps, more features and a more affordable price.",
            available: 2,
            price: 30
        },
        {   age: 5,
            carrier: "Dell",
            goodId: "dell-venue",
            name: "Dell Venue",
            snippet: "The Dell Venue; Your Personal Express Lane to Everything",
            available: 7,
            price: 35
        }
    ];

    $scope.goods = goods;
    $scope.item = 0;
    $scope.summ = 0;
    $scope.shopCart = $scope.goods;
    $scope.shopCart.mainSumm = 0;

    for (let item of $scope.shopCart) {
        item.amount = 0;
    }

    $scope.incItem = function (goodsItem) {
        goodsItem = ((this.item + 1) > this.grocItem.available) ? goodsItem : goodsItem + 1;
        this.grocItem.amount = goodsItem;
        this.summ = this.grocItem.amount * this.grocItem.price;
        $scope.calcMainSumm();
        return goodsItem;
    }
    $scope.decItem = function (goodsItem) {
        goodsItem = ((this.item - 1) > -1) ? goodsItem - 1 : goodsItem;
        this.grocItem.amount = goodsItem;
        this.summ = this.grocItem.amount * this.grocItem.price;
        $scope.calcMainSumm();
        return goodsItem;
    }
    $scope.calcMainSumm = function () {
        $scope.shopCart.mainSumm = 0;
        for (let item of $scope.shopCart) {
            $scope.shopCart.mainSumm = $scope.shopCart.mainSumm + item.amount * item.price;
        }
    }
    $scope.toShopCart = function() {
        localStorage.setItem('shopCart', JSON.stringify($scope.shopCart));
        window.location = '#!/basket';
    }
});
