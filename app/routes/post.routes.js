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
                state: 'posts',
                config: {
                    url: '/posts',
                    templateUrl: 'views/posts/index.html',
                    controller: 'PostIndexController',
                    controllerAs: 'vm'
                }
            }
        ];
    }
})();