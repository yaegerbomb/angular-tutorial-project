(function(){
    'use strict';

    angular
        .module('app')
        .factory('PostApiService', PostApiService)

        
    PostApiService.$inject = ['$http', 'APIConstants', 'LoggerFactory'];

    /** @ngInject */
    function PostApiService($http, APIConstants, LoggerFactory){

        return {
            getPost: getPost,
            getPosts: getPosts,
            newPosts: newPosts
        }

        function getPost(id){
            LoggerFactory.logInfo("Getting Post");
            return $http.get(APIConstants.root + "/posts/" + id);
        }

        function getPosts(){
            LoggerFactory.logInfo("Getting Posts");
            return $http.get(APIConstants.root + "/posts");
        }

        function newPosts(post){
            LoggerFactory.logInfo("Creating Post");
            return $http.post(APIConstants.root + "/posts", post);
        }
    }

}());