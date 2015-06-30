(function() {
    var mainController = function($scope, $modal, idea_service, label_service, ideaEditorService, semantic_service){

        $scope.ideas = {};
        $scope.dirty_ideas = {};
        $scope.dirty = false;
        $scope.is_edit_mode = false;
        $scope.current_idea = null;
        $scope.mouse_over_editor = false;
        $scope.labels_ready = false;
        $scope.ideas_ready = false;
        $scope.label_class_list = [];

        label_service.initialize().then(function(class_list) {
            $scope.labels_ready = true;
            $scope.label_class_list = class_list;
            $scope.label_class_list.push({id: 7, name: 'FAKE'});
            $scope.new_label_class_id = class_list[0].id;
        });

        $scope.submit_idea = function() {
            idea_service.submit_idea($scope.new_idea_box)
                .then(function() {
                    $scope.refresh();
                    $scope.new_idea_box = '';
                });
        };

        $scope.submit_idea_label = function() {
            var label_class_id = $scope.new_label_class_id;
            var label_value = semantic_service.get_label_editor_value();
            console.log([label_class_id, label_value]);
        };

        $scope.open_idea = function(idea_id) {
            $scope.current_idea = $scope.ideas[idea_id];
            $scope.is_edit_mode = true;

            var modalInstance = $modal.open({
                templateUrl: '/assets/templates/idea-editor.html',
                controller: 'ideaEditorController',
                size: 'lg'
            });
            modalInstance.rendered.then(function() {
                ideaEditorService.createAndRender($scope.current_idea.html);
            });


        };

        $scope.save_all = function() {
            idea_service.save_batch($scope.dirty_ideas)
                .then(function() {
                    $scope.dirty_ideas = {};
                    $scope.dirty = false;
                });
        };

        $scope.refresh = function() {
            idea_service.get_all()
                .then(function(idea_dict) {
                   $scope.ideas = idea_dict;
                    $scope.ideas_ready = true;
                });
        };
        $scope.refresh();

        ideaEditorService.set_change_function(function(new_html) {
            var cur = $scope.current_idea;
            cur.html = new_html;
            cur.plaintext = ideaEditorService.clean_html(new_html);
            $scope.dirty_ideas[cur.id] = cur;
            $scope.dirty = true;
        });

        $scope.render_new_label = semantic_service.render_new_label;
    };

    /** Injection **/
    mainController.$inject = ['$scope', '$modal', 'idea_service', 'label_service', 'ideaEditorService', 'semantic_service'];
    angular.module('ink').controller('mainController', mainController);
}());
