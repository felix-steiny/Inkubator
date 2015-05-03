(function() {
    window.ink.directive('inkLabelGroup', function() {
        return {
            restrict: 'E',
            templateUrl: '/assets/templates/label-group-template.html',
            scope: {
              labels: '='
            }
        };
    });
}());