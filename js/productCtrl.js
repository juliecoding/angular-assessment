
angular.module("app").controller("productCtrl", function($scope, mainService) {

  var getProducts = function(){
    mainService.getProducts().then(function(response){
      console.log(response);
      $scope.products = response.data;
    })
  }

  getProducts();

});
