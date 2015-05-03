(function() {
    window.ink.directive('inkEditWindow', function() {
        return {
            restrict: 'E',
            templateUrl: '/assets/templates/edit-window-template.html',
            link: function() {
                tinymce.init({
                    selector: "textarea"
                });
            }
        };
    });
}());