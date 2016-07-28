'use strict';

// Declare app level module which depends on views, and components
angular.module('GITALO')
.controller('DevelopersCtrl',function($scope,$q,UserService, $log){



        $scope.developers =[];


        /*
        THE PAGINATION
         */

        $scope.filteredTodos = []
            ,$scope.currentPage = 1
            ,$scope.numPerPage = 8
            ,$scope.maxSize = 5;









 $scope.page =1


        //to increment the page
        $scope.click = function(){
            $scope.page++;
            console.log('page' + $scope.page);
        }

        //to decrement the page number

        $scope.decrement = function(){
            $scope.page--;
            console.log('page' + $scope.page);

        }







function getUsers() {


    $scope.$watch('page', function() {
        console.log('page is' +$scope.page )

        var getUsers = UserService.getUsers($scope.page);


        getUsers.then(function (data) {

            console.log('data' + JSON.stringify(data.data.items.length))

            $scope.total_count = data.data.total_count;

            $scope.developers = data.data.items;



            //page++;

        }, function (err) {
            console.log('err' + err)
        })
    });




}//


        //call the function getUsers()
        getUsers()











        $scope.getUserFollowers = function(username){

            UserService.getUserFollowers(username)
                .then(function(data){
                    console.log('data' + JSON.stringify(data));
                    console.log('data')

                    return data

                }).catch(function(err){
                    console.log('err'+ JSON.stringify(err))
                })

        }






















    })