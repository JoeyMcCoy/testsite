angular.module('portfolio',[]).
	config(function($routeProvider){
		$routeProvider.
			when('/1',{template:'partial.html'}).
			otherwise({redirectTo:'/',template:'index.html'});
	});
function MainCtrl($scope){
	
}