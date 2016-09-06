'use strict';

// Declare public level module which depends on views, and components
angular.module('GITALO')
    .controller('ReposCtrl',['$scope','getAllRepos','cfpLoadingBar','$timeout','ReposService','$window','$document', function($scope,getAllRepos,cfpLoadingBar
    ,$timeout,ReposService,$window,$document){

var repos = this ;

        $scope.page =1;
        repos.numberPagination=0;


        var top = 0;
        var duration = 2000; //milliseconds




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
            console.log('we will increment')
            $scope.page++;
            repos.loading = true;
            $window.scrollTo(0, 0);
            //Scroll to the exact position



            //usSpinnerService.spin('spinner-1');
        }

        //to decrement the page number

        repos.decrement = function(){
            repos.loading = true;
            $scope.page--;
            console.log('clicked ')
            //usSpinnerService.spin('spinner-1');
            $window.scrollTo(0, 0);

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