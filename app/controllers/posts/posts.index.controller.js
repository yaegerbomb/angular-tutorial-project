(function(){
    'use strict';

    angular
        .module('app')
        .controller('PostIndexController', PostIndexController)

        PostIndexController.$inject = ['PostApiService', 'LoggerFactory'];

    /** @ngInject */
    function PostIndexController(PostApiService, LoggerFactory){
        var vm = this;
        
        vm.posts;
        vm.post;
        vm.newPost;

        vm.getPosts = getPosts;
        vm.createPost = createPost;


        init();

        function init(){
            vm.post = {};
            vm.newPost = {};
            vm.posts = [];

            getPost(1);

        }

        function getPost(id){
            PostApiService.getPost(id)
                .then(function(results){
                    vm.post = results.data;
                })
        }

        function getPosts(){
            PostApiService.getPosts()
                .then(function(results){
                    vm.posts = results.data;
                }, function(err){
                    LoggerFactory.logError(err.data);
                });
        }

        
        function createPost(){
            var post = {
                userid: 1,
                id: 9999,
                title: vm.newPost.title,
                body: vm.newPost.body
            };
            PostApiService.newPosts(post)
                .then(function(results){
                    LoggerFactory.logInfo(results.data);
                }, function(err){
                    LoggerFactory.logError(err.data);
                });
        }

    }

}());