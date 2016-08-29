




/**
 *
 *
 * SERVICE TO HUNDle AUTHENTICATION
 */

// logger.js
(function() {
    'use strict';

    angular
        .module('GITALO')
        .service('ReposService',['$q','$http', function($q,$http){

            //function to get all repos of specific user
            this.getRepos = function(username,repo) {
                var promise       =  $http.get('https://api.github.com/repos/' + username + '/' + repo),
                    deferObject =   $q.defer();

                promise.then(
                    // OnSuccess function
                    function(answer){

                        // This code will only run if we have a successful promise.
                        deferObject.resolve(answer);

                    },
                    // OnFailure function
                    function(reason){
                        // This code will only run if we have a failed promise.
                        console.log('reason' + JSON.stringify(reason))
                        deferObject.reject(reason);
                    });

                return deferObject.promise;
            },

                /*
                 *
                 *
                 *
                 */
                //function to get all Contributors of repo
                this.getReposContributors =function(username,repo) {

                    var promise       =  $http.get('https://api.github.com/repos/' + username + '/' + repo + '/contributors'),
                        deferObject =   $q.defer();

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



                /*
                 *
                 *
                 *
                 */
                //function to get all Repos serted bu number of stars

                this.getAllRepos = function(page) {
                    var promise       =  $http.get('https://api.github.com/search/repositories?q=+stars:>1&sort=stars&order=desc&per_page=8&page='+page),
                        deferObject =   $q.defer();

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

                /*
                 *
                 *
                 *
                 */
                //function to get all Repos by language

                this.orderReposBylanguage= function(language) {
                    var promise       =  $http.get('https://api.github.com/search/repositories?q=+language:'+language+'&sort=stars&order=desc'),
                        deferObject =   $q.defer();

                    promise.then(
                        // OnSuccess function
                        function(answer){



                            // This code will only run if we have a successful promise.
                            deferObject.resolve(answer);

                        },
                        // OnFailure function
                        function(reason){
                            // This code will only run if we have a failed promise.
                            console.log('reason' + JSON.stringify(reason))
                            deferObject.reject(reason);
                        });

                    return deferObject.promise;
                },

                /*
                 *
                 *
                 *
                 */
                //function to search  list of Repos by word entered in the input by the user
                this.SearchByWord =function(word) {
                    var promise       =  $http.get('https://api.github.com/search/repositories?q=' +word+ '&sort=stars&order=desc'),
                        deferObject =   $q.defer();

                    promise.then(
                        // OnSuccess function
                        function(answer){



                            // This code will only run if we have a successful promise.
                            deferObject.resolve(answer);

                        },
                        // OnFailure function
                        function(reason){
                            // This code will only run if we have a failed promise.
                            console.log('reason' + JSON.stringify(reason))
                            deferObject.reject(reason);
                        });

                    return deferObject.promise;
                }





        }]);

})();