
'use strict';

/**
 *
 *
 * SERVICE FOR COMPONENT ORGANISATIONS
 */

// logger.js
(function() {
    'use strict';

    angular
        .module('GITALO')
        .service('OrganisationService',['$q','$http', function($q,$http){



            var Me = this;

            var deferObject,
                organisations =[]


            this.getOrganisations = function(page){


                //https://api.github.com/search/organizations?q=+stars:>1&sort=stars&order=desc
                //"https://api.github.com/orgs/:org/repos?type=forks
                var promise       =  $http.get('https://api.github.com/search/users?q=type:org&sort=stars&order=desc&per_page=8&page='+page),
                    deferObject =   $q.defer();

                promise.then(
                    // OnSuccess function
                    function(answer){




                        deferObject.resolve(answer);

                    },
                    // OnFailure function
                    function(reason){
                        // This code will only run if we have a failed promise.

                        deferObject.reject(reason);
                    });

                return deferObject.promise;

            }
                ,

                //another function


                this.getOrganisation = function(org){

                    var promise       =  $http.get('https://api.github.com/orgs/' + org + ''),
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
                }



//function to get Repos of organisation

            this.getOrganisationRepos = function(org){

                var promise       =  $http.get('https://api.github.com/orgs/' + org + '/repos'),
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
            }


//function to get organisationEvents

            this.getOrganisationMembers = function(org){

                var promise       =  $http.get('https://api.github.com/orgs/' + org +  '/members'),
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
            }
        }]);





})();