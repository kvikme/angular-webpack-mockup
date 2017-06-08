(function () {
    'use strict';

    require('angular');

    angular.module('myApp')
        .controller('buttonCtrl', buttonCtrl);

    function buttonCtrl() {
        this.title = 'This is buttonCtrl!!';
    }
})();
