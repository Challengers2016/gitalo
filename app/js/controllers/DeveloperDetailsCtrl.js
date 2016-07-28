'use strict';

// Declare app level module which depends on views, and components
angular.module('GITALO')
    .controller('DeveloperDetailsCtrl',function($scope,$q,UserService,$stateParams,getRepositories,getUser,getOrganisations){



$scope.User =getUser.data;
        $scope.User.repos  =getRepositories.data;
        $scope.User.organisations = getOrganisations.data

    })