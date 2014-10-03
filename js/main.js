var app = angular.module('myApp',[]);
app.run(function($rootScope){
	$rootScope.name = "James Zhao";
})

app.controller('myController', function($scope){
	$scope.person={controller_name: "James Zhao"};
});
app.controller('parentController', function($scope){
	$scope.person={greeted:false};
});
app.controller('childController', function($scope){
	$scope.sayHello=function(){
		$scope.person.greeted=($scope.person.greeted==false?true:false);
	}
});