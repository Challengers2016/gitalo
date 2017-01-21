'use strict';

// Declare public level module which depends on views, and components
angular.module('GITALO')
    .controller('DeveloperDetailsCtrl',['$scope','$q','DeveloperService','$stateParams','getRepositories','getUser','getOrganisations',
        '$timeout','ReposService',function($scope,$q,DeveloperService,$stateParams,getRepositories,getUser,getOrganisations,$timeout, ReposService){



var DD = this ;
            DD.loading=true;



        $scope.searchText = '';




        //function to sort repositories by stars or watchers
        this.orderBy = function(value){


            $scope.myOrderBy = value;

        }

        $timeout(function () {
            DD.loading=false;
        }, 500);


        //get the Developer Detail data
        this.User =getUser.data;
        //get list of repos of User
        this.User.repos  =getRepositories.data;
        //get List of organisatiosn of User
        this.User.organisations = getOrganisations.data



        //For searching repo watching the value of searchText in input search
        $scope.$watch('searchText', function(value){
            if(value) {


                ReposService.SearchByWord(value)
                    .then(function (data) {
                        $scope.Repos =data.data.items;
                        $scope.numberofRepos=   data.data.total_count


                    }).catch(function (err) {
                        console.log('err' + err)
                    })

            }
        })
    }])




