(function(){
    'use strict';

    angular
        .module('app')
        .factory('UserApiService', UserApiService)

        UserApiService.$inject = ['$http', 'APIConstants', 'LoggerFactory'];

    /** @ngInject */
    function UserApiService($http, APIConstants, LoggerFactory){

        return {
            getUsers: getUsers
        }

        function getUsers(){
            LoggerFactory.logInfo("Getting Users");
            return $http.get(APIConstants.root + "/users");
        }
    }

}());