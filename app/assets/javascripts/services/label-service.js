(function() {
    var label_service = function ($http) {
        var service = {
            initialize: initialize,
            hydrate_labels: safe_hydrate_labels,
            get_label_class: get_label_class
        };

        /** PRIVATE **/
        var ready = false;

        var label_classes = {}; //dict id => label_class
        // label_class = {name:, color:, semantics:[class_semantic_ids]}

        var skipped_ideas = [];

        function hydrate_labels(idea) {
            angular.forEach(idea.labels, function(label) {
                var label_class = label_classes[label.label_class_id];
                label.color = label_class.color;
                label.class = label_class.name;
                label.semantics = label_class.semantics;
            });
        }


        /** PUBLIC **/
        function initialize() {
            return $http.get("/label").then(function(data) {
                var list = [];
                angular.forEach(data.data, function(label_class) {
                    label_classes[label_class.id] = label_class;
                    list.push(label_class);
                });

                ready = true;
                angular.forEach(skipped_ideas, hydrate_labels);
                return list;
            });
        }

        function safe_hydrate_labels(idea) {
            if (!ready) {
                skipped_ideas.push(idea);
                return;
            }

            hydrate_labels(idea);
        }

        function get_label_class(label_class_id) {
            return label_classes[label_class_id];
        }

        return service;
    }
    label_service.$inject = ['$http'];
    window.ink.factory('label_service', label_service);
})();