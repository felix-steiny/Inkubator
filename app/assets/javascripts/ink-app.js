angular.module('ink', []).controller('ktrl', function($scope, $http){

    $scope.ideas = [];

    $scope.submit_idea = function() {
        $http.post("/idea", {new_idea: $scope.new_idea_box})
            .success(function() {
                $scope.refresh();
                $scope.new_idea_box = '';
            });
    };

    $scope.refresh = function() {
        $http.get("/idea")
            .success(function(data) {
                $scope.ideas = data;
            });
    };
    $scope.refresh();
});

