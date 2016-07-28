'use strict';

// Declare app level module which depends on views, and components
angular.module('GITALO')
    .controller('ReposDetailsCtrl',function($scope,getRepositorie,getReposContributors){


        $scope.Repo =getRepositorie.data;

        $scope.Repo.contributors = getReposContributors.data



    })