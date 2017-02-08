angular.module("app").service("mainService", function($http) {

  var BASE_URL = 'http://practiceapi.devmounta.in/products'

  this.getProducts = function() {
    return $http({
      method: 'GET',
      url: BASE_URL
    })
  }

  this.getProductDetails = function(id) {
    return $http({
      method: 'GET',
      url: BASE_URL + '/' + id
    })
  }


});
