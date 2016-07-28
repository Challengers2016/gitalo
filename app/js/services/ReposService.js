'use strict';


angular.module('GITALO')
    .service('ReposService', function($q,$http){





        var deferObject,
            myMethods = {

                getRepos: function(username,repo) {
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

                getReposContributors: function(username,repo) {
                    var promise       =  $http.get('https://api.github.com/repos/' + username + '/' + repo + '/contributors'),
                        deferObject =   $q.defer();

                    promise.then(
                        // OnSuccess function
                        function(answer){

                            console.log('answer' + JSON.stringify(answer));

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






            };

        return myMethods;








    })