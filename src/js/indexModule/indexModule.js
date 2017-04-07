angular.module('IndexModule', [])

.service('HomeTestService', [function () {
    return function () {
        return 'test from IndexModule'
    }
}])

.component('testCom', {
    bindings: {
        data: '<'
    },
    controller: ['$scope', function(){
        let that = this;
        that.title = 'TEST'        
    }],
    controllerAs: 'vm',
    template: '' +
        '<div>' +
            'This is a {{ vm.title }} component' +
        '</div>'
})

.controller('homeCtrl', ['$scope', 'TestService', 'HomeTestService', function ($scope, TestService, HomeTestService) {
    $scope.title = "home"
    // 调用通用模块服务
    console.log(TestService())
    // 调用首页模块服务
    console.log(HomeTestService())
}])


