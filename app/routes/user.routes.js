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
                state: 'users',
                config: {
                    url: '/users',
                    templateUrl: 'views/users/index.html',
                    controller: 'UserIndexController',
                    controllerAs: 'vm'
                }
            }
        ];
    }
})();