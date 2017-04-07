angular.module('TestModule', [])

.controller('testCtrl', ['$scope', '$window', '$location', function ($scope, $window, $location) {
    $scope.title = "test"
    console.log($window)
    console.log($location.search())

}])
