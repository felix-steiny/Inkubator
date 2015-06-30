(function() {
    window.ink.directive('inkEditWindow', function() {
        return {
            restrict: 'E',
            templateUrl: '/assets/templates/idea-editor.html',
            link: function() {
                tinymce.init({
                    selector: "textarea"
                });
            }
        };
    });
}());