(function () {
    'use strict';

    require('angular');

    angular.module('myApp')
        .controller('MyCtrl', MyCtrl);

    function MyCtrl() {
        this.dontwork = 'works great!';
    }
})();
