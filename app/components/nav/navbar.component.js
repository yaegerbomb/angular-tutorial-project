(function () {
    'use strict';

    angular
        .module ('app')
        .component ('navbar', component());


    function component() {

        function componentController(){
            var vm = this;
            
            init();

            function init(){

            }
        }

        return {
            bindings: {},
            controller: componentController,
            controllerAs: '${ctrl}',
            templateUrl: '/app/templates/nav/navbar.html'
        }
    }

} ());