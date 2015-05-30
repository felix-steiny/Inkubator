(function(){
    var fixed_selection = function() {
        var semantic = {
            semantic_name: 'fixed_selection',
            has_editor: true,

            render_editor: render_editor,
            get_editor_value: get_editor_value
        };

        function render_editor(options) {
            var html = "<select id='label_value_editor'>"

            var optArr = options.split('|');
            angular.forEach(optArr, function(opt) {
                html += "<option id='" + opt + "'>" + opt + "</option>";
            });

            html += "</select>";

            return html;
        }

        function get_editor_value() {
            return jQuery('#label_value_editor').val();
        }

        return semantic;
    };

    /** injection **/
    fixed_selection.$inject = [];
    window.ink.factory('sem_fixed_selection', fixed_selection);
}());