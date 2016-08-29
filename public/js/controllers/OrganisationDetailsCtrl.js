'use strict';

// Declare public level module which depends on views, and components
angular.module('GITALO')
    .controller('OrganisationDetailsCtrl',['$scope','$timeout','getOrganisation','getOrganisationRepos','getOrganisationMembers',function($scope,$timeout
        ,getOrganisation,getOrganisationRepos,getOrganisationMembers){


        var orgDetails = this ;
        orgDetails.loading=true;


        orgDetails.organisation = getOrganisation.data;
        orgDetails.OrganisationRepos = getOrganisationRepos.data;
        orgDetails.OrganisationMembers = getOrganisationMembers.data;



        $timeout(function () {
            orgDetails.loading = false;
        }, 500);



    }])