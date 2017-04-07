routerConfig.$inject = ['$stateProvider', '$urlRouterProvider', '$urlMatcherFactoryProvider', '$locationProvider']

export default function routerConfig ($stateProvider, $urlRouterProvider, $urlMatcherFactoryProvider, $locationProvider) {
  $stateProvider
    .state('myCenter', {
      url: '/myCenter',
      templateUrl: 'templates/myTemplates/myCenter.html',
      controller: 'MyCenterCtrl',
      controllerAs: 'mcc'
    })

  $stateProvider
    .state('test', {
      url: '/test',
      templateUrl: 'templates/myTemplates/test.html',
      controller: 'TestCtrl',
      controllerAs: 'tc'
    })

  $urlMatcherFactoryProvider.caseInsensitive(true)
  $urlRouterProvider.otherwise('/myCenter')
  // $locationProvider.html5Mode(true)
}
