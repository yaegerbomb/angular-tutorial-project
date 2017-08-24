(function () {
    'use strict';
    angular
        .module('app')
        .run(appRun);

    appRun.$inject = ['routerHelper'];

    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates(), '/404');
    }

    function getStates() {
        return [
            {
                state: 'home',
                config: {
                    url: '/',
                    templateUrl: 'views/home.html',
                    controller: 'HomeIndexController',
                    controllerAs: 'vm'
                }
            },
            {
                state: 'notfound',
                config: {
                    url: '/404',
                    templateUrl: 'views/404.html'
                }
            }
        ];
    }
})();