


/**
 *
 *
 * SERVICE FOR DEVELOPERS
 */

// logger.js
(function() {
    'use strict';

    angular
        .module('GITALO')
        .service('DeveloperService',['$http','$q', function($http,$q){
            var  deferObject ;

            this.getUsers = function(page) {
                var promise       =  $http.get('https://api.github.com/search/users?q=+repos:%3E42+followers:%3E1000&page='+page + '&per_page=8'),
                    deferObject =  deferObject || $q.defer();

                promise.then(
                    // OnSuccess function
                    function(answer){
                        // This code will only run if we have a successful promise.
                        deferObject.resolve(answer);
                    },
                    // OnFailure function
                    function(reason){
                        // This code will only run if we have a failed promise.
                        deferObject.reject(reason);
                    });

                return deferObject.promise;
            },



                //-__-_-_-_-_--__-_-_-_-_-_-_-_-_
                /*
                 GET USER DETAILS
                 */

                this.getUser = function(username) {

                    var promise       =  $http.get('https://api.github.com/users/' + username),
                        deferObject =  deferObject || $q.defer();

                    promise.then(
                        // OnSuccess function
                        function(answer){
                            // This code will only run if we have a successful promise.
                            deferObject.resolve(answer);
                        },
                        // OnFailure function
                        function(reason){
                            // This code will only run if we have a failed promise.
                            deferObject.reject(reason);
                        });

                    return deferObject.promise;
                },


                //-__-_-_-_-_--__-_-_-_-_-_-_-_-_
                /*
                 GET USER DETAILS
                 */

                this.getUserRepositories = function(username) {

                    var promise       =  $http.get('https://api.github.com/users/' + username +'/repos'),
                        deferObject =  deferObject || $q.defer();

                    promise.then(
                        // OnSuccess function
                        function(answer){
                            // This code will only run if we have a successful promise.
                            deferObject.resolve(answer);
                        },
                        // OnFailure function
                        function(reason){
                            // This code will only run if we have a failed promise.
                            deferObject.reject(reason);
                        });

                    return deferObject.promise;
                },


                //-__-_-_-_-_--__-_-_-_-_-_-_-_-_
                /*
                 GET USER DETAILS
                 */

                this.getUserOrganisations =function(username) {

                    var promise       =  $http.get('https://api.github.com/users/' + username +'/orgs'),
                        deferObject =  deferObject || $q.defer();

                    promise.then(
                        // OnSuccess function
                        function(answer){
                            // This code will only run if we have a successful promise.
                            deferObject.resolve(answer);
                        },
                        // OnFailure function
                        function(reason){
                            // This code will only run if we have a failed promise.
                            deferObject.reject(reason);
                        });

                    return deferObject.promise;
                },

                this.getloggedInUser = function(){
                    var user = localStorage.getItem('firebase:session::gitalo')


                    if(user){
                        return JSON.parse(user);
                    }
                }












        }])



})();