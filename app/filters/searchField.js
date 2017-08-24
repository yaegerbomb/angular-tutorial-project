(function () {
    'use strict';

    angular
        .module('app')
        .filter('searchField', searchField)

    searchField.$inject = ['$parse'];

    function searchField($parse) {

        return searchFieldFn;

        function searchFieldFn(collection) {


            var get, field;

            collection = angular.isObject(collection) ? 
                angular.isArray(collection) ? collection :  Object.keys(object).map(function(key) {
                    return object[key];
                }) 
            : collection;

            var args = Array.prototype.slice.call(arguments, 1);

            if (!angular.isArray(collection) || !args.length) {
                return collection;
            }

            return collection.map(function (member) {

                field = args.map(function (field) {
                    get = $parse(field);
                    return get(member);
                }).join(' ');

                return angular.extend(member, { searchField: field });
            });
        }
    }

}());