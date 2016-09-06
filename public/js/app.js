'use strict';




// Declare public level module which depends on views, and components
angular.module('GITALO',['ui.router','ngAnimate','ui.bootstrap','firebase','ngLoadingSpinner','angular-loading-bar','duScroll'])






/*
CONFIG THE ROUTING
 */
    .config(['$stateProvider','$urlRouterProvider',function($stateProvider, $urlRouterProvider) {

      $urlRouterProvider.otherwise('/');

      $stateProvider



          .state('Repositories', {
            url: '/',
              cache : false,
            templateUrl: 'partials/pages/Repositories.html',
            controller :'ReposCtrl as repos',
              resolve: {


                  getAllRepos: ['ReposService', function (ReposService) {
                      return ReposService.getAllRepos();
                  }]
              }
          })

          .state('reposDetails', {
              url: '/developers/:username/:repos',
              cache : false,
              templateUrl: 'partials/pages/ReposDetails.html',
              controller :'ReposDetailsCtrl as rd',
              resolve: {


                  getRepositorie: ['$stateParams', 'ReposService', function ($stateParams, ReposService) {


                      console.log('data' + JSON.stringify($stateParams));
                      return ReposService.getRepos($stateParams.username,$stateParams.repos)
                  }],
                  //getReposContributors
                  getReposContributors: ['$stateParams', 'ReposService', function ($stateParams, ReposService) {



                      return ReposService.getReposContributors($stateParams.username,$stateParams.repos)
                  }],

              }
          })

          .state('organisations', {
            url: '/organisations',

            templateUrl: 'partials/pages/Organisations.html',
            controller :'OrganisationsCtrl as org',
              resolve: {


                  getOrganisations: ['$stateParams', 'OrganisationService', function ($stateParams,OrganisationService) {
                      return OrganisationService.getOrganisations();
                  }],

              }
          })

          .state('organisationDetails', {
              url: '/organisationDetails/:username',
              cache : false,
              templateUrl: 'partials/pages/OrganisationDetails.html',
              controller :'OrganisationDetailsCtrl as orgDetails',
              resolve: {

                  getOrganisation: ['$stateParams', 'OrganisationService', function ($stateParams,OrganisationService) {
                      return OrganisationService.getOrganisation($stateParams.username);
                  }],

                  getOrganisationRepos: ['$stateParams', 'OrganisationService', function ($stateParams,OrganisationService) {
                      return OrganisationService.getOrganisationRepos($stateParams.username);
                  }],
                  getOrganisationMembers : ['$stateParams', 'OrganisationService', function ($stateParams,OrganisationService) {
                      return OrganisationService.getOrganisationMembers($stateParams.username);
                  }],

              }
          })



          .state('tags', {
            url: '/tags',
              cache : false,
            templateUrl: 'partials/pages/Tags.html',
            controller :'TagsCtrl'
          })

          .state('developers', {
            url: '/developers',
              cache : false,
            templateUrl: 'partials/pages/Developers.html',
            controller :'DevelopersCtrl as dd',

          })

          .state('developerDetails', {
              url: '/developers/:username',
              cache : false,
              templateUrl: 'partials/pages/DeveloperDetails.html',
              controller :'DeveloperDetailsCtrl as DD',
              resolve: {

                  getRepositories: ['$stateParams', 'DeveloperService', function ($stateParams, DeveloperService) {

                      return DeveloperService.getUserRepositories($stateParams.username)
                  }],

                  getUser: ['$stateParams', 'DeveloperService', function ($stateParams, DeveloperService) {

                      return DeveloperService.getUser($stateParams.username)
                  }],
                  getOrganisations: ['$stateParams', 'DeveloperService', function ($stateParams,DeveloperService) {
                      return DeveloperService.getUserOrganisations($stateParams.username);
                  }]
              }
          })




          .state('Profile', {
              url: '/Profile',
              cache : false,

              templateUrl: 'partials/pages/Profile.html',
              controller :'ProfileCtrl as pr',

              resolve: {


                  getWatching: ['DeveloperService', function (DeveloperService) {
                      return DeveloperService.UserWatching();
                  }],
                  getStarting: ['DeveloperService', function (DeveloperService) {
                      return DeveloperService.UserStarting();
                  }],

              }
          })

          .state('GIT', {
              url: '/GIT',
              cache : false,

              templateUrl: 'partials/pages/Discover.git.html',
              controller :'ProfileCtrl as pr',

          })













    }])


.constant('FireBaseUrl','https://gitalo.firebaseio.com/')
.run(['$rootScope','DeveloperService','Auth',function($rootScope,DeveloperService,Auth){




        Auth.$onAuth(function(authData) {





            if (authData) {
                $rootScope.authenticated = true;

            } else {
                $rootScope.authenticated = false;

            }

        })



        if( DeveloperService.getloggedInUser()){
            $rootScope.loggedInUser =  DeveloperService.getloggedInUser();

        }
    }])


    .filter('trustAsResourceUrl', ['$sce', function($sce) {
        return function(val) {
            return $sce.trustAsResourceUrl(val);
        };
    }])