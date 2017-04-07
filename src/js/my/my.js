import angular from 'angular'
import uiRouter from 'angular-ui-router'
import ngDialog from 'ng-dialog'
import routerConfig from './router.config'
import appConfig from './my.config'
import appRun from './my.run'

import MyControllerModule from './myController'
import MyComponentModule from './myComponent'
import MyServiceModule from './myService'

angular.module('TCMApp', [ uiRouter, ngDialog, MyControllerModule, MyComponentModule, MyServiceModule ])
.constant('CW', {
  'API_URL': 'http://water.tigonetwork.com',
  'API_ROOT': 'http://water.tigonetwork.com',
  'BAIDU_KEY': 'YCyHwcdg5YzMFVr2YLbo6yEi',
  'WECHAT_APPID': 'wx6f3d915bc86723c3',
  'WECHAT_APPSECRET': 'bb1e4075591c219115af6b37fb63fb84'
})
.constant('USER', {
  user_id: null,
  user_token: null
})
.config(appConfig)
.config(routerConfig)
.config(['$provide', function ($provide) {
  $provide.decorator('$state',
    ['$delegate', '$stateParams', '$timeout', function ($delegate, $stateParams, $timeout) {
      $delegate.forceReload = function () {
        var reload = function () {
          $delegate.transitionTo($delegate.current, angular.copy($stateParams), {
            reload: true,
            inherit: true,
            notify: true
          })
        }
        reload()
        $timeout(reload, 100)
      }
      return $delegate
    }])
}])
.run(appRun)
