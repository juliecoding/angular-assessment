angular.module("app").controller("shopCtrl", function($scope, mainService, $stateParams) {

    var getProducts = function(){
      mainService.getProducts().then(function(response){
        console.log(response);
        $scope.products = response.data;
      })
    }

    getProducts();

});
