(function(){
    var ideaEditorService = function() {
        return {
            createAndRender: createAndRender,
            set_change_function: set_change_function,
            clean_html: clean_html
        };

        /** PRIVATE **/
        var currentEditor;
        var changeFunction;


        function onChange() {

            if(typeof changeFunction === "function") {
                changeFunction(currentEditor.getContent());
            }
        }

        /** PUBLIC **/

        function createAndRender(initialValue) {
            currentEditor = tinymce.EditorManager.createEditor("idea-text-editor", {});
            currentEditor.on('init', function(){
                currentEditor.setContent(initialValue);
            });
            currentEditor.on('change',onChange );
            currentEditor.render();
        }

        function set_change_function(func) {
            changeFunction = func;
        }

        function clean_html(dirty) {
            return jQuery(dirty).text();
        }
    };
    angular.module('ink').factory('ideaEditorService', ideaEditorService);
}());