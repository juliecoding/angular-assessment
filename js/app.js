angular.module('app', ['ui.router'])
.config(function($urlRouterProvider, $stateProvider){

  $urlRouterProvider.otherwise('/')

  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: './views/home.html',
    controller: 'mainCtrl'
  })
  .state('about', {
    url: '/about',
    templateUrl: './views/about.html'
  })
  .state('shop', {
    url: '/shop',
    templateUrl: './views/shop.html',
    controller: 'shopCtrl'
  })
  .state('blog', {
    url: '/blog',
    templateUrl: './views/blog.html'
  })
  .state('details', {
    url: '/details/:id',
    templateUrl: './views/product-details.html',
    controller: 'detailsCtrl'
  })

})
