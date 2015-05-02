(function(){
    ink.factory('editor', function() {
        return {
            set: set_content,
            set_change_function: set_change_function,
            clean_html: clean_html
        };

        /** PRIVATE **/
        var editor;
        var change_function;

        function e() {
            if(!editor) {
                editor = tinymce.EditorManager.get('editor');
                editor.on('change', on_change);
            }
            return editor;
        }

        function on_change() {
            if(typeof change_function === "function") {
                change_function(editor.getContent());
            }
        }

        /** PUBLIC **/
        function set_content(value) {
            e().setContent(value);
        }

        function set_change_function(func) {
            change_function = func;
        }

        function clean_html(dirty) {
            return jQuery(dirty).text();
        }
    });
}());