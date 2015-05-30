(function() {
    var mainDirective = function() {
        return {

            restrict: 'E',
            templateUrl: '/assets/templates/main.html',
            controller: 'mainController'

        };
    };
    angular.module('ink').directive('main', mainDirective);
}());