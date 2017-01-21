'use strict';

// Declare public level module which depends on views, and components
angular.module('GITALO')
.controller('DevelopersCtrl',['$scope','$q','DeveloperService','$http','$timeout','$window',function($scope,$q,DeveloperService
        ,$http, $timeout,$window){

var dd = this ;
        dd.developers =[];


        /*
        THE PAGINATION
         */

        dd.filteredTodos = []
            ,dd.currentPage = 1
            ,dd.numPerPage = 8
            ,dd.maxSize = 5;


        dd.loading = true ;

        $timeout(function () {
            dd.loading = false;
        }, 2000);






 $scope.page =1


        //to increment the page
        dd.click = function(){
            $scope.page++;
            dd.loading = true ;
            $window.scrollTo(0, 0);
        }

        //to decrement the page number

        dd.decrement = function(){
            $scope.page--;
            dd.loading = true ;
            $window.scrollTo(0, 0);
        }



var j=0;

var developers =[];

function getUsers() {


    $scope.$watch('page', function() {


        var getUsers = DeveloperService.getUsers($scope.page);
        dd.loading = true ;

        getUsers.then(function (data) {


            dd.total_count = data.data.total_count;

            dd.developers = data.data.items;
            dd.loading = false;


            //$scope.developers = developers;
            var promises = [];

           for(j=0;j<=7;j++){


            var promise = DeveloperService.getUser(  dd.developers[j].login)

               promises.push(promise);

           }//end for

            $q.all([promises[0],promises[1],promises[2],promises[3],promises[4],promises[5],promises[6],promises[7]]).then(function(data){


                //data.splice(i, 1);

                dd.developers =data




            });



        }, function (err) {
            console.log('err' + err)
        })
    });




}//


        //call the function getUsers()
        getUsers()



















    }])
