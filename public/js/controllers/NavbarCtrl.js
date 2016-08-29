'use strict';

// Declare public level module which depends on views, and components
angular.module('GITALO')
    .controller('NavbarCtrl',['$scope','Auth','$rootScope', function($scope,Auth,$rootScope){



        $scope.login = function(){

            // login with github
            Auth.$authWithOAuthPopup("github").then(function(authData) {
                $scope.$emit('$auth:authenticated');
            }).catch(function(error) {
                console.log("Authentication failed:", error);
            });
        }


        //logout function

        $scope.logout = function(){


            Auth.$unauth();
            $scope.$emit('$auth:unauthenticated');
        }

    }])