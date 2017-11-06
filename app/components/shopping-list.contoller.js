    
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

            var self = this
            this.products = [
                {name: "iphone", price: 1000},
                {name: "samsung", price: 900},
                {name: "motorola", price: 750},
                {name: "huawei", price: 489},
                {name: "LG", price: 670},

            ]
            this.cart= {
                sum: 0,
                cartProducts: []
            };

            this.sumMessage = function () {
                if (self.cart.cartProducts.length) { return self.cart.cartProducts.length}
                else {return "no"};
            }
        
            

            this.add = function(record) {
                self.cart.sum = self.cart.sum + record.price;
                self.cart.cartProducts.push(record);
            }


            this.remove = function(record) {
                self.cart.sum = self.cart.sum - record.price;
                
                self.cart.cartProducts.splice(record, 1)
            }

            this.clearCart = function() {

            }
            
        }
    })();