'use strict';

// Declare public level module which depends on views, and components
angular.module('GITALO')
    .controller('ReposCtrl',['$scope','getAllRepos','cfpLoadingBar','$timeout','ReposService', function($scope,getAllRepos,cfpLoadingBar
    ,$timeout,ReposService){

var repos = this ;

        $scope.page =1;
        repos.numberPagination=0;




        //function orderBy

        repos.orderBy = function(value){
            repos.myOrderBy = value;

        }




        //function to serahc from github


        $scope.$watch('searchText', function(value){


            if(value) {

                repos.loading = true;
                ReposService.SearchByWord(value)
                    .then(function (data) {
                        repos.Repos =data.data.items;
                        repos.numberofRepos=   data.data.total_count
                        repos.loading = false;

                    }).catch(function (err) {
                        console.log('err' + err)
                    })

            }
        })













        //function order
        repos.orderReposBylanguage = function(language){
            repos.loading = true;
            ReposService.orderReposBylanguage(language)
                .then(function(data){
                    repos.Repos =data.data.items;
                    repos.loading = false;
                    repos.numberofRepos=   data.data.total_count
                }).catch(function(err){
                    console.log('err' + JSON.stringify(err));
                })
        }

        //to increment the page
        repos.click = function(){
            repos.page++;
            repos.loading = true;

            //usSpinnerService.spin('spinner-1');
        }

        //to decrement the page number

        repos.decrement = function(){
            repos.loading = true;
            repos.page--;
            console.log('clicked ')
            //usSpinnerService.spin('spinner-1');

        }






        function getRepos() {


          $scope.$watch('page', function() {


                var promise = ReposService.getAllRepos($scope.page)

                repos.loading = true;


              promise.then(function (data) {


                    repos.numberofRepos=   data.data.total_count
                    repos.Repos = data.data.items;
                    repos.numberPagination = data.data.total_count/8;


                    repos.loading = false;

                }, function (err) {
                    console.log('err' + err)
                })
            });




        }//


        //call the function getRepos()
        getRepos()


    }])