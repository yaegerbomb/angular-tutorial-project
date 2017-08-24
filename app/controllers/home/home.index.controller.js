(function(){
    'use strict';

    angular
        .module('app')
        .controller('HomeIndexController', ControllerCtrl)

    /** @ngInject */
    function ControllerCtrl(){
        var vm = this;
        
        vm.welcomeMessage;

        init();

        function init(){
            vm.welcomeMessage = "My welcome message"
        }

    }

}());