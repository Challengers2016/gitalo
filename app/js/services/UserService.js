'use strict';


angular.module('GITALO')
    .service('UserService', function($q,$http){





        var deferObject,
            myMethods = {

                getUsers: function(page) {
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

                getUser: function(username) {

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

                getUserRepositories: function(username) {

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

                getUserOrganisations: function(username) {

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
                }





            };

        return myMethods;








    })