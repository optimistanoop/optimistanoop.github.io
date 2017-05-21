var app = angular.module("icred", ["ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "view/main.html"
    })
    .when("/tab1", {
        templateUrl : "view/tab1/tab1.html"
    })
    .when("/tab1/l1", {
        templateUrl : "view/tab1/t1l1.html"
    })
    .when("/tab1/l2", {
        templateUrl : "view/tab1/t1l2.html"
    })
    .when("/tab2", {
        templateUrl : "view/tab2/tab2.html"
    })
    .when("/tab2/l1", {
        templateUrl : "view/tab2/t2l1.html"
    })
    .when("/tab2/l2", {
        templateUrl : "view/tab2/t2l2.html"
    });
});

app.controller('icredCtrl', ['$scope','$location',function($scope, $location){
	
  $scope.tabs = [{name:'Home', url:'#/'},
                 {name:'Home Loan', url:'#tab1'},
                 {name:'Personal Loan', url:'#tab2'}];
  
	$scope.$on('$locationChangeSuccess', function(){
		var path = $location.path();
    if(path && path.includes('tab1')) $scope.selection = '#tab1';
    else if(path && path.includes('tab2')) $scope.selection = '#tab2';
    else $scope.selection = '#/';
	});
	
}]);
