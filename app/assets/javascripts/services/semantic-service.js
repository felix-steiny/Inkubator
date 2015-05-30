(function(){
    var semantic_service = function(label_service, $sce) {
        var service = {
            render_new_label: render_new_label,
            get_label_editor_value: get_label_editor_value
        };

        var semantics_dict = {};
        angular.forEach(arguments, function(arg) {
            if(arg.semantic_name && arg.semantic_name != '') {
                semantics_dict[arg.semantic_name] = arg;
            }
        });

        var current_editor = null;

        function render_default_editor() {
            return "<input type='text' />";
        }

        function render_new_label(label_class_id) {
            var label_class = label_service.get_label_class(label_class_id);

            if(!label_class) {
                return render_default_editor();
            }

            var editor_semantic = null;
            var editor_options = null;
            angular.forEach(label_class.semantics, function(sem) {

                var sem_service = semantics_dict[sem.name];

                if(sem_service.has_editor){
                    editor_semantic = sem_service;
                    editor_options = sem.options;
                }
            });
            var result = editor_semantic.render_editor(editor_options);
            current_editor = editor_semantic;

            return $sce.trustAsHtml(result);
        }

        function get_label_editor_value() {
            return current_editor.get_editor_value();
        }

        return service;
    };

    /** injection **/
    semantic_service.$inject = ['label_service', '$sce', 'sem_fixed_selection'];
    window.ink.factory('semantic_service', semantic_service);
}());