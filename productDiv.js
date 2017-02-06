angular.module("app").directive('productDir', function() {
  return {
    restrict: 'EA',
    templateUrl: './app/directives/some/someTmpl.html',
    controller: 'someCtrl'
  };
});
