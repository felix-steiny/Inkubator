(function() {
    var ideaListView = function() {
        return {
            restrict: 'E',
            templateUrl: '/assets/templates/idea-list-view.html'
        };
    };
    angular.module('ink').directive('ideaListView', ideaListView);
}());