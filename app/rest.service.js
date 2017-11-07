    
    (function () {
        'use strict';
        angular
            .module('myApp')
            .service('rest', function () {


                var products = [
                    {name: "iphone", price: 1000, vol: 1},
                    {name: "samsung", price: 900, vol: 1},
                    {name: "motorola", price: 750, vol: 1},
                    {name: "huawei", price: 489, vol: 1},
                    {name: "LG", price: 670, vol: 1},
                ];
                
                function getProdusts() {
                    return products;
                };
                
                return {
                    getProdusts: getProdusts,
    
                };

        })
    })();