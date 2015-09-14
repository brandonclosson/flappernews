var app = angular.module('flapperNews', []);

app
.factory('posts', [function(){
	var o = {
		posts: [],
	};
	return o;
}])
.controller('MainCtrl', [
'$scope',
'posts',
function($scope, posts) {
	$scope.test = 'Hello world!';

	$scope.posts = posts.posts;
	
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