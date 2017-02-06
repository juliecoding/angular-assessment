angular.module("app").directive('productDir', function() {
  return {
    restrict: 'E',
    templateUrl: './views/product-tmpl.html',
    scope: {
      product: '='
    },
    controller: function($scope) {
      $scope.showImage = true;
    }
  };
});



/*
<!--
    <!-- Product skeleton-->
        <!--Product Image-->
        <!--Product Image click collapse the image-->
        <a class="product-grid__product" >
            <img class="product-grid__img" src="{{product.image}}"  sizes="(min-width: 960px) 33vw, (min-width: 769px) 50vw, 100vw" alt="">
        </a>
        <a class="product-grid__product">
            <!-- show image -->
        </a>

        <!--Product Meta-->
        <div class="product-grid__meta">
            <!--Title click Should redirect to the product-details section. remember to pass along the product id so you can make an api call
        to get the specific product details-->
            <h3 class="product-grid__name"><a ui-sref="product-details">{{product.name}}</a></h3>

            <!--Product Description-->
            <h4 class="product-grid__sub">{{product.desc}}</h4>

            <!--Product Price-->
            <div class="product-grid__price">{{product.price}}</div>
        </div>
    <!--End product Skeleton -->
-->
*/
