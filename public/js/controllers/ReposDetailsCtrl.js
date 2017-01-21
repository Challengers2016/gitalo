'use strict';

// Declare public level module which depends on views, and components
angular.module('GITALO')
    .controller('ReposDetailsCtrl',['$scope','getRepositorie','getReposContributors','$timeout',function($scope,getRepositorie,getReposContributors,$timeout){

var rd = this ;
        rd.Repo =getRepositorie.data;

        rd.Repo.contributors = getReposContributors.data

        rd.loading = true ;

        $timeout(function () {
            rd.loading = false;
        }, 2000);

    }])