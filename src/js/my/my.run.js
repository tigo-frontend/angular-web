appRun.$inject = ['$browser', '$window', '$rootScope', '$timeout', '$state']

export default function appRun ($browser, $window, $rootScope, $timeout, $state) {
  $browser.baseHref = function () { return '/' }

  $rootScope.goBack = function () {
    $window.history.back()
  }

  // $rootScope.$on("$stateChangeStart", function(event, next, nextParams, fromState){
//     let contains = function (arr, obj) {
//         let i = arr.length
//         while (i--) {
//             if (arr[i] === obj) {
//                 return true
//             }
//         }
//         return false
//     }
//     let loggedOnlyStates = ['myCenter']
//     if (!AuthService.isAuthenticated()) {
//         if (contains(loggedOnlyStates, next.name)) {
//             $timeout(() => {
//                 $state.go('login', {'from': next.name})
//             })
//         }
//     }
  // })
}
