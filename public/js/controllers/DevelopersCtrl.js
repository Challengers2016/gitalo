'use strict';

// Declare public level module which depends on views, and components
angular.module('GITALO')
.controller('DevelopersCtrl',['$scope','$q','DeveloperService',function($scope,$q,DeveloperService){

var dd = this ;
        dd.developers =[];


        /*
        THE PAGINATION
         */

        dd.filteredTodos = []
            ,dd.currentPage = 1
            ,dd.numPerPage = 8
            ,dd.maxSize = 5;









 $scope.page =1


        //to increment the page
        dd.click = function(){
            $scope.page++;
        }

        //to decrement the page number

        dd.decrement = function(){
            $scope.page--;
        }



var j=0;

var developers =[];

function getUsers() {


    $scope.$watch('page', function() {


        var getUsers = DeveloperService.getUsers($scope.page);
        dd.loading = true;

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














//the follow function
//?access_token=4d4f3e281c3688d91404d547269f5280546cb3d8

        //"Headers" -> {"Authorization" -> "token " <> token}

        /*{
        headers : {
            'Content-Type':'application/json',
                'Authorization': 'token %s' % 'a4abd33e7823ae6ae21ec78adb47695dc92d0255',
        }
    }*/

        //740ae65ad80ef20ddfea249c0d284e63af11a10d
// "Authorization :token 740ae65ad80ef20ddfea249c0d284e63af11a10d"
       /* $http.put('https://api.github.com/user/following/JakeWharton',
            {
             headers : {
             'Content-Type':'application/json',
             'Authorization': 'token %s' % 'a4abd33e7823ae6ae21ec78adb47695dc92d0255',
             }
             }
            )
        .then(function(data){
            console.log('data' + data)

        }).catch(function(er){
            console.log('err' + JSON.stringify(er))
        })*/

        dd.follow = function(){
            //follow user
        }
















    }])