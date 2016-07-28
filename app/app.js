'use strict';

// Declare app level module which depends on views, and components
angular.module('GITALO',['ui.router','ngAnimate','ui.bootstrap'])






/*
CONFIG THE ROUTING
 */
    .config(function($stateProvider, $urlRouterProvider) {

      $urlRouterProvider.otherwise('/home');

      $stateProvider


          .state('home', {
            url: '/home',
            templateUrl: 'partials/pages/home.html',
            controller :'HomeCtrl'
          })

          .state('technologies', {
            url: '/technologies',
            templateUrl: 'partials/pages/tecknologies.htmll',
            controller :'technologiesCtrl'
          })

          .state('organisations', {
            url: '/organisations',
            templateUrl: 'partials/pages/Organisations.html',
            controller :'OrganisationsCtrl'
          })

          .state('trending', {
            url: '/trending',
            templateUrl: 'partials/pages/trending.html',
            controller :'trendingsCtrl'
          })

          .state('developers', {
            url: '/developers',
            templateUrl: 'partials/pages/Developers.html',
            controller :'DevelopersCtrl'
          })

          .state('developerDetails', {
              url: '/developers/:username',
              templateUrl: 'partials/pages/DeveloperDetails.html',
              controller :'DeveloperDetailsCtrl',
              resolve: {

                  getRepositories: ['$stateParams', 'UserService', function ($stateParams, UserService) {

                      return UserService.getUserRepositories($stateParams.username)
                  }],

                  getUser: ['$stateParams', 'UserService', function ($stateParams, UserService) {
                      //console.log('username' + $stateParams.username)
                      return UserService.getUser($stateParams.username)
                  }],
                  getOrganisations: ['$stateParams', 'UserService', function ($stateParams,UserService) {
                      return UserService.getUserOrganisations($stateParams.username);
                  }]
              }
          })


          .state('reposDetails', {
              url: '/developers/:username/:repos',
              templateUrl: 'partials/pages/ReposDetails.html',
              controller :'ReposDetailsCtrl',
              resolve: {

                  getRepositorie: ['$stateParams', 'ReposService', function ($stateParams, ReposService) {



                      return ReposService.getRepos($stateParams.username,$stateParams.repos)
                  }],
                  //getReposContributors
                  getReposContributors: ['$stateParams', 'ReposService', function ($stateParams, ReposService) {



                      return ReposService.getReposContributors($stateParams.username,$stateParams.repos)
                  }],

              }
          })




          .state('News', {
            url: '/News',
            templateUrl: 'partials/pages/News.html',
            controller :'NewsCtrl'
          })



    })

