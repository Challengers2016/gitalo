'use strict';

// Declare public level module which depends on views, and components
angular.module('GITALO')
    .controller('ProfileCtrl',['$scope','Auth',function($scope,Auth){





        $scope.User =Auth.$getAuth() ;

        console.log('User' + JSON.stringify( $scope.User));

        console.log('token' + JSON.stringify($scope.User.github))















    }])