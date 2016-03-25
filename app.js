angular.module('portfolio', []).
	config(function($routeProvider){
		$routeProvider.
			when('/1',{template:'partial.html'});			
	});
function MainCtrl($scope){
	$scope.setRoute = function(route){
		$location.path(route);
	}
}