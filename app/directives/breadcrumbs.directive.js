(function () {
    'use strict';

    angular
        .module ('app')
        .directive ('breadcrumbs', breadcrumbs);


    /** @ngInject */
    function breadcrumbs() {

        function breadcrumbsController(){
            var ctrl = this;
            
            init();

            function init(){

            }
        }

        return {
            bindToController: true,
            controller: breadcrumbsController,
            controllerAs: 'ctrl',
            restrict: 'E',
            templateUrl: 'templates/breadcrumbs.html',
            scope: {
                links: '='
            },
        }
    }

} ());