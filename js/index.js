require('../css/my.css');

(function () {
    'use strict';

    if (process.env.NODE_ENV === 'development') {
        require('../index.html');
    }

    require('angular');

    angular.module('myApp', []);

    require('./myCtrl');
    require('./buttonCtrl');

})();
