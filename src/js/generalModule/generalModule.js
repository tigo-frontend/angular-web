angular.module('GeneralModule', [])

// 通用指令
.directive('tab', function() {
    return {
        restrict: 'E',
        transclude: true,
        template: '<div ng-show="active" ng-transclude class="mainTabContent"></div>',
        require: '^tabset',
        scope: {
            heading: '@'
        },
        link: function(scope, elem, attr, tabsetCtrl) {
            scope.active = false;
            tabsetCtrl.addTab(scope);
        }
    };
})
.directive('tabset', function() {
    return {
        restrict: 'E',
        transclude: true,
        scope: {
            tabindex: '=tabIndex',
            tabChanged: '&'
        },
        template: '<div class="tabs"><ul class="tab-links"><li class="tab-item" ng-repeat="tab in tabset.tabs track by $index" ng-class="{active: tab.active}"><a href="" role="tab" ng-click="tabset.select(tab,$index)">{{tab.heading}}</a></li></ul><div class="tab-content clear-fix"><div class="tab-item-content"><ng-transclude></ng-transclude></div></div></div>',
        bindToController: true,
        controllerAs: 'tabset',
        controller: function() {
            var self = this;
            self.tabs = [];
            self.addTab = function addTab(tab) {
                self.tabindex = self.tabindex || 0;
                self.tabs.push(tab);
                if (self.tabindex === self.tabs.length - 1) {
                    tab.active = true;
                }
            };

            self.select = function(selectedTab, index) {
                angular.forEach(self.tabs, function(tab) {
                    if (tab.active && tab !== selectedTab) {
                        tab.active = false;
                    }
                });
                if (self.tabChanged) {
                    self.tabChanged({
                        index: index
                    });
                }
                self.tabindex = index;
                selectedTab.active = true;
            };
        }
    };
})
.directive("fileinput", function($parse){
    return {
        link: function($scope, element, attrs){
            element.on("change", function(event){
                var files = event.target.files;
                $parse(attrs.fileinput).assign($scope, element[0].files);
                $scope.$apply();
                $scope.$apply(attrs.filechange);
            });
        }
    }
})

// ####################################################################################

// 通用服务
.service('TestService', [function () {
    return function () {
        return 'test from GeneralModule'
    }
}])




