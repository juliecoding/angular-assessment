angular.module("app").service("mainService", function($http) {

  var URL = "http://practiceapi.devmounta.in/products";

  this.getProducts = function() {
    return $http ({
      method: 'GET',
      url: URL
    })
    // .then(function(response){
    //   console.log(response);
    // })
  };

});
