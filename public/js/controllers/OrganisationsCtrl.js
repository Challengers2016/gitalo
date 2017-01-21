'use strict';

// Declare public level module which depends on views, and components
angular.module('GITALO')
    .controller('OrganisationsCtrl',['$scope','OrganisationService','getOrganisations','$q','$timeout', function($scope,OrganisationService,getOrganisations
    ,$q,$timeout){


        var org = this;
        org.loading=true;
        //we will get organisatiosn
        org.orgs =[];
        org.organisations=[];
        var i=0;
        var   promises = [];





        $timeout(function () {
            org.loading = false;
        }, 2000);


        //the page
        $scope.page = 1 ;

        //to increment the page
        org.click = function(){
            $scope.page++;
            org.loading=true;


        }

        //to decrement the page number

        org.decrement = function(){
            $scope.page--;
            org.loading=true;
            //i-=7;
        }





//function to open modal

        org.openModal = function(email){
            alert('console.log' + email);
        }



        function getOrgs() {


            $scope.$watch('page', function() {



                var getOrgs = OrganisationService.getOrganisations($scope.page);


                org.loading = true;





                getOrgs.then(function (data) {



//console.log('data recived' + JSON.stringify(data))

                    org.organisations =data.data.items ;

                    org.loading = false;


                   for(var j=0;j<=7;j++){

                        var resultPromise = OrganisationService.getOrganisation(  org.organisations[j].login);
                       promises.push(resultPromise);

                   }//end for


                    $q.all([promises[0],promises[1],promises[2],promises[3],promises[4],promises[5],promises[6],promises[6],promises[7]]).then(function(data){

                        org.organisations =data;

                        promises=[];


                    });


                }, function (err) {
                    console.log('err' + err)
                })
            });




        }//

        //call the function getUsers()
        getOrgs()




    }])