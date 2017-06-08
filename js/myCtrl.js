(function () {
    'use strict';

    require('angular');

    angular.module('myApp')
        .controller('myCtrl', myCtrl);

    function myCtrl() {
        this.dontwork = 'works great!';
    }
})();
