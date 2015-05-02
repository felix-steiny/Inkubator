(function(){
    var idea_service = function($http) {
        return {
            get_all: get_all,
            save_batch: save_batch,
            submit_idea: submit_idea
        };

        function get_all() {
            return $http.get("/idea")
                .then(function(data) {
                    var idea_dict = {};
                    angular.forEach(data.data, function(idea) {
                        idea_dict[idea.id] = idea;
                    });
                    return idea_dict;
            });
        }

        function save_batch(idea_dict) {
            var ideas_to_update = [];
            angular.forEach(idea_dict, function(idea) {
                ideas_to_update.push(idea);
            });
            return $http.post("/idea/save", {ideas: ideas_to_update});
        }

        function submit_idea(new_text) {
            return $http.post("/idea", {new_idea: new_text});
        }
    };

    /** injection **/
    idea_service.$inject = ['$http'];
    window.ink.factory('idea_service', idea_service);
}());