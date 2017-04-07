angular.module('TCApp', ['ui.router', 'ngDialog', 'GeneralModule', 'IndexModule', 'BiddingModule', 'TestModule'])
.constant('CW', {
    'API_URL': 'http://water.tigonetwork.com',
    'API_ROOT': 'http://water.tigonetwork.com',
    'BAIDU_KEY': 'YCyHwcdg5YzMFVr2YLbo6yEi',
    'WECHAT_APPID': 'wx6f3d915bc86723c3',
    'WECHAT_APPSECRET': 'bb1e4075591c219115af6b37fb63fb84'
})

.config(['ngDialogProvider', '$httpProvider', '$httpParamSerializerJQLikeProvider', function (ngDialogProvider, $httpProvider, $httpParamSerializerJQLikeProvider) {
    ngDialogProvider.setDefaults({
        className: 'ngdialog-theme-default'
    });

    $httpProvider.defaults.transformRequest.unshift($httpParamSerializerJQLikeProvider.$get());
    $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=utf-8';
}])

.run(['$browser', '$rootScope', '$window', '$timeout', '$state', function ($browser, $rootScope, $window, $timeout, $state) {
    $browser.baseHref = function () { return '/' };

    $rootScope.goBack = function(){
        $window.history.back();
    }

    // $rootScope.$on('$stateChangeStart', function(event, next, nextParams, fromState){
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
}])
