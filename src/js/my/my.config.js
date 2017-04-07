appConfig.$inject = ['ngDialogProvider', '$httpProvider', '$httpParamSerializerJQLikeProvider']

export default function appConfig (ngDialogProvider, $httpProvider, $httpParamSerializerJQLikeProvider) {
  'ngInject'
  ngDialogProvider.setDefaults({
    className: 'ngdialog-theme-default'
  })

  $httpProvider.defaults.transformRequest.unshift($httpParamSerializerJQLikeProvider.$get())
  $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=utf-8'
}
