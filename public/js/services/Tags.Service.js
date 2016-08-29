


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
        .service('TagsService',['$http','$q', function($http,$q){
            this.getListTags = function() {
                var promise       =  $http.get('https://api.stackexchange.com/2.2/tags?order=desc&sort=popular&site=stackoverflow'),
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

                this.getPopularTools= function() {
                    var promise       =  $http.get('./json/Popular.json'),
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