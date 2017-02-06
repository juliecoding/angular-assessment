angular.module("app").controller("shopCtrl", function($scope, mainService) {

  mainService.getProducts().then(function(response){
    $scope.products = response.data;
  })

});
