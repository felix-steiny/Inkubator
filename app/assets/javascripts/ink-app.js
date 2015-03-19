angular.module('ink', []).controller('ktrl', function($scope, $http){

    $scope.ideas = [];

    $http.get("/idea")
        .success(function(data) {
            $scope.ideas = data;
        });

});

