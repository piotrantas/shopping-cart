    
    (function () {
        'use strict';
        angular
            .module('myApp')
            .component('shoppingList', {
                templateUrl:'components/shopping-list.template.html',
                controllerAs: "vm",
                controller: myCtrl
            } );
           
        function myCtrl($scope) {

            $scope.products = [
                {name: "iphone", price: 1000},
                {name: "samsung", price: 900},
                {name: "motorola", price: 750},
                {name: "huawei", price: 489},
                {name: "LG", price: 670},

            ]
            $scope.cart= {
                sum: 0,
                cartProducts: []
            };

            $scope.sumMessage = function () {
                if ($scope.cart.cartProducts.length) { return $scope.cart.cartProducts.length}
                else {return "no"};
                console.log($scope.cartProducts)
            }
        
            
            $scope.disabled = function (el) {
                if ($scope.cart.cartProducts.findIndex((element)=> element === $scope.products[el]) < 0) {
                    return true}
                else {return false}
            }




            $scope.add = function(i) {
                $scope.cart.sum = $scope.cart.sum + $scope.products[i].price;
                $scope.cart.cartProducts.push($scope.products[i]);
            }


            $scope.remove = function(i) {
                $scope.cart.sum = $scope.cart.sum - $scope.products[i].price;
                var ind = $scope.cart.cartProducts.findIndex((element)=> element === $scope.products[i]);
                $scope.cart.cartProducts.splice(ind, 1)
            }
            
        }
    })();