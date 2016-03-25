'use strict';
var app = angular.module('portfolio', []);
portfolio.controller('PartialController',function($rootScope, $scope, $location, $routeParams){
	 $scope.showPartial = function(pathurl){

        console.log(pathurl)
        $location.path(pathurl)
    }
});