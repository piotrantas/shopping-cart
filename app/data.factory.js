     
    (function () {
        'use strict';
        angular
            .module('myApp')
            .factory('data', function () {

                var cart= {
                    sum: 0,
                    cartProducts: []
                };
                
                function getCart() {
                    return cart;
                };

                function setCart(updateCart) {
                    console.log(updateCart)
                    return cart = updateCart;
                };
                
                return {
                    getCart: getCart,  
                    setCart: setCart
                };

        })
    })();