'use strict';

// Declare app level module which depends on views, and components
angular.module('GITALO')
    .controller('HomeCtrl',['$scope','$http','UserService', function($scope,$http,UserService){


        //test services
        /*
         request({
         url : 'https://api.github.com/search/users?q=+followers:>=1000',
         headers: { 'user-agent': 'git-technetium' },
         json :true
         }, function(error,reposne,body){
         console.log('error' + error + 'repsonse' + JSON.stringify(reposne) + 'body' + JSON.stringify(body))
         })
         */

        console.log('ok ok ok')


    }])