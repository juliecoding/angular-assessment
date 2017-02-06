angular.module('app')
.controller('mainCtrl', function($scope, mainService){

    $scope.getProducts = function(){
      mainService.getProducts().then(function(response){
        console.log(response.data);
        $scope.products = response.data;
      })
    }

    $scope.getProducts();

})
