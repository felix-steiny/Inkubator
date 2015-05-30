(function() {
    var ideas = function() {
        return {
            restrict: 'E',
            controller: 'ideasController'
        };
    };
    angular.module('ink').directive('ideas', ideas);
}());