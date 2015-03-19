angular.module('ink', []).controller('ktrl', function($scope){
    $scope.moose = "meeee";

    $scope.ideas = [
        {id: 1, html: "Hello <i>angular<i/>", plaintext: "Hello angular" },
        {id: 7, html: "<h1>by and by</h1>", plaintext: "by and by" },
        {id: 30, html: "Fond <i>farewell<i/>", plaintext: "fond farewell" }
    ]
});

