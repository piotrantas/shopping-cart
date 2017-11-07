    
    (function () {
        'use strict';
        angular
            .module('myApp')
            .component('shoppingList', {
                templateUrl:'components/list/shopping-list.template.html',
                controllerAs: "vm",
                controller: myCtrl
            } );
           
        function myCtrl(rest, data) {

            var self = this

            this.products = rest.getProdusts();

        
            this.add = function(record) {
                
                var cart = data.getCart()
                var a = cart.cartProducts.indexOf(record);
                if (a >= 0 ){ cart.cartProducts[a].vol++ }
                else {cart.cartProducts.push(record)}
                cart.sum = cart.sum + record.price;
                data.setCart(cart)
            }

            
        }
    })();