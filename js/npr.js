var app = angular.module('npr',[]);
app.controller('PlayerController',['$scope', function($scope){
	$scope.playing=false;
	$scope.audio = document.createElement('audio');
	$scope.audio.src = 'http://k007.kiwi6.com/hotlink/aarmq8qumb/Wake_Me_Up.mp3';
	$scope.play = function(){
		$scope.audio.play();
		$scope.playing=true;
	};
	$scope.stop = function(){
		$scope.audio.pause();
		$scope.playing=false;
	};
	$scope.audio.addEventListener('ended', function(){
		$scope.$apply(function(){
			$scope.stop();
		});
	});
}]);
app.controller('RelatedController',['$scope', function($scope){

}]);