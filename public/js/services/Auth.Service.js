

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
        .factory('Auth',['$firebaseAuth','FireBaseUrl', function($firebaseAuth,FireBaseUrl){
            var ref = new Firebase(FireBaseUrl);

            return $firebaseAuth(ref);
        }]);
})();