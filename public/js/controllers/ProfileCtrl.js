'use strict';

// Declare public level module which depends on views, and components
angular.module('GITALO')
    .controller('ProfileCtrl',['$scope','Auth','getWatching','$http','getStarting',function($scope,Auth,getWatching,$http,getStarting){



var pr = this ;

        $scope.User =Auth.$getAuth() ;











   pr.watching = getWatching ;
        pr.Starting =getStarting;

        $http.get('https://api.github.com/users/Rebaiahmed/starred')
            .then(function(data){
                console.log('dataa' + JSON.stringify(data.data.length));

            }).catch(function(eer){
                console.log('err' + eer)
            })





    }])