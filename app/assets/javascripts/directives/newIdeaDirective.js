(function() {
    var newIdeaDirective = function() {
        return {

            restrict: 'E',
            templateUrl: '/assets/templates/newIdeaTemplate.html',
            controller: 'newIdeaController',
            scope: {}

        };
    };
    angular.module('ink').directive('newIdea', newIdeaDirective);
}());
