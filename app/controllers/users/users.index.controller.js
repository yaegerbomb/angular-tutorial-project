(function(){
    'use strict';

    angular
        .module('app')
        .controller('UserIndexController', UserIndexController)

    UserIndexController.$inject = ['UserApiService', 'LoggerFactory']

    /** @ngInject */
    function UserIndexController(UserApiService, LoggerFactory){
        var vm = this;
        
        vm.users;
        vm.searchField;
        vm.breadcrumbLinks;

        vm.getUsers = getUsers;

        init();

        function init(){
            vm.users = [];
            vm.searchField = "";
            
            vm.breadcrumbLinks = [
                { 
                    uisref: 'home',
                    title: 'Home'
                },
                {
                    title: 'Users'
                }
            ]

            vm.getUsers();
        }

        function getUsers(){
            UserApiService.getUsers().then(function(results){
                vm.users = results.data
                LoggerFactory.logSuccess("Successfully Got All Users");
            }, function(err){
                LoggerFactory.logError(err.data);
            });
        }

    }

}());