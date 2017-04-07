angular.module('TCApp')
.config(['$stateProvider', '$locationProvider', '$urlRouterProvider', '$urlMatcherFactoryProvider', function ($stateProvider, $locationProvider,$urlRouterProvider,$urlMatcherFactoryProvider) {
    // Index Module
    $stateProvider
        .state('home',{
            url:"/home",
            templateUrl:'templates/indexTpl/home.html',
            controller:'homeCtrl'
        })

    // Bidding Module
    $stateProvider
        .state('bidding',{
            url:"/bidding",
            templateUrl:'templates/biddingTpl/bidding.html',
            controller:'biddingCtrl'
        })














        .state('test',{
            url:"/test",
            templateUrl:'templates/testTpl/test.html',
            controller:'testCtrl'
        })

        $urlRouterProvider.otherwise("/home")
}])