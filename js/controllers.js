var characterControllers = angular.module('characterControllers', ['ngAnimate']);

characterControllers.controller('ListController', ['$scope', '$http', function($scope, $http) {

	$http.get('js/data.json').success(function(data){
		$scope.character = data;
		$scope.characterOrder = 'name';
	});	

}]);

characterControllers.controller('DetailsController', ['$scope', '$http','$routeParams', function($scope, $http, $routeParams) {

	$http.get('js/data.json').success(function(data){
		$scope.character = data;
		$scope.whichItem = $routeParams.itemId;

		if($routeParams.itemId > 0){
			$scope.prevItem = Number($routeParams.itemId)-1;
		}
		else{
			$scope.prevItem = $scope.character.length-1;
		}	


		if($routeParams.itemId < $scope.character.length-1){
			$scope.nextItem = Number($routeParams.itemId)+1;
		}
		else{
			$scope.nextItem = 0;
		}

	});	

}]);