'use strict';

// Declare public level module which depends on views, and components
angular.module('GITALO')
    .controller('TagsCtrl',['$scope','TagsService', function($scope,TagsService){

        $scope.loading = true;

        $scope.popularTools =[];
        TagsService.getListTags().then(function(data){

            $scope.Tags = data.data.items;
            $scope.loading = false;
        }).catch(function(err){
            console.log('deeee' + err)
        })

        TagsService. getPopularTools().then(function(data){

            $scope.popularTools = data.data ;
        }).catch(function(err){
            console.log('err' + err)
        })

    }])