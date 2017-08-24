(function(){
    'use strict';

    angular
        .module('app')
        .factory('LoggerFactory', LoggerFactory)

    /** @ngInject */
    function LoggerFactory(){

        return {
            logInfo: logInfo,
            logSuccess: logSuccess,
            logWarning: logWarning,
            logError: logError
        }

        function logInfo(message){
            console.log('%c ' + message, 'background: blue; color: white; display: block;')
        }

        function logSuccess(message){
            console.log('%c ' + message, 'background: green; color: white; display: block;')
        }

        function logWarning(message){
            console.log('%c ' + message, 'background: yellow; color: white; display: block;')
        }

        function logError(message){
            console.logError("An error occured!")
            console.logError(message);
        }
    }

}());