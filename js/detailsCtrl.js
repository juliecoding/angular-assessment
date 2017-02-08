angular.module("app").controller("detailsCtrl", function($scope, mainService, $stateParams) {



  var id = $stateParams.id

  mainService.getProductDetails(id).then(function(response){
    console.log('hey');
    console.log(response);
    $scope.productDetails = response.data;
  })



});
