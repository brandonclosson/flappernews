var app = angular.module('flapperNews', []);

app.controller('MainCtrl', [
'$scope',
function($scope) {
	$scope.test = 'Hello world!';

	$scope.posts = [
		{title: 'post 1', upvotes: 2},
		{title: 'post 2', upvotes: 5},
		{title: 'post 3', upvotes: 12},
		{title: 'post 4', upvotes: 4},
		{title: 'post 5', upvotes: 18}
	];

	$scope.addPost = function() {
		if ($scope.title === '' || $scope.title === undefined) { return; }
		$scope.posts.push({
			title: $scope.title, 
			link: $scope.link,
			upvotes: 4
		});
		$scope.title = '';
	}

	$scope.incrementUpvotes = function(post) {
		post.upvotes += 1;
	}
}]);