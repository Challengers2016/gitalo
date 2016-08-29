'use strict';

// Declare public level module which depends on views, and components
angular.module('GITALO')
    .controller('ReposDetailsCtrl',['$scope','getRepositorie','getReposContributors',function($scope,getRepositorie,getReposContributors){

var rd = this ;
        rd.Repo =getRepositorie.data;

        rd.Repo.contributors = getReposContributors.data



    }])