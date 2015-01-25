angular.module('flapperNews', [])
.controller('MainCtrl', [
'$scope',
function($scope){
	$scope.test = 'Hello world!';

	$scope.answer = 5;

	$scope.posts = [
	 {title: 'C\'est facile!', content: 'tu trouveras en deux secondes en cherchant un peu', upvotes: 0},
	 {title: 'Une petite explication', content: 'Kijiji est le site qui propose le plus d\'offres de location, tu devrais commencer par la', upvotes: 20}
	 ];

	$scope.addPost = function(){
	  if(!$scope.title || $scope.title === '' || !$scope.content || $scope.content ==='') { return; }
	  $scope.posts.push({
	    title: $scope.title,
	    content: $scope.content,
	    upvotes: 0
	  });
	  $scope.title = '';
	  $scope.content = '';
	};

	$scope.incrementUpvotes = function(post) {
  		post.upvotes += 1;
	};

	$scope.downVotes = function(post) {
		post.upvotes -= 1;
	}

	$scope.addmain = function(){
		$scope.answer += 1;
	}

	$scope.downmain = function(){
		$scope.answer -= 1;
	}

}]);