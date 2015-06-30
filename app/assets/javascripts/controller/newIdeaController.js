(function() {
    var newIdeaController = function($scope, $rootScope, idea_service){
      $scope.newIdea = "";

      $scope.submit_idea = function() {
          idea_service.submit_idea($scope.newIdea);
          $rootScope.$broadcast("newIdeaAdded");
          $scope.newIdea = "";
      };
    };

    /** Injection **/
    newIdeaController.$inject = ['$scope', '$rootScope', 'idea_service'];
    angular.module('ink').controller('newIdeaController', newIdeaController);
}());
