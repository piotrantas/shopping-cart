    
    (function () {
        'use strict';
        angular
            .module('myApp')
            .component('shoppingCart', {
                templateUrl:'components/cart/shopping-cart.template.html',
                controllerAs: "vm",
                controller: cartCtrl
            } );
           
        function cartCtrl(data) {

            var self = this


            this.cart = data.getCart()

            this.sumMessage = function () {
                if (this.cart.cartProducts.length) { return self.cart.cartProducts.length}
                else {return "no"};
            }
        
            this.remove = function(record) {
                self.cart.sum = self.cart.sum - record.price;
                self.cart.cartProducts.map(function(prod){
                    if (prod.name === record.name) {
                        if (prod.vol === 1) {self.cart.cartProducts.splice(record, 1)}
                        else (prod.vol--)
                    }
                    else {return}
                })

            }

            this.clearAll = function() {
                this.cart.cartProducts = [];
                this.cart.sum = 0;
            }
            
        }
    })();