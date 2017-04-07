import angular from 'angular'
import MyCenterCtrl from './controllers/MyCenterCtrl'

import TestCtrl from './controllers/TestCtrl'

var MyControllerModule = 'MyControllerModule'

angular.module(MyControllerModule, [])
    .controller('MyCenterCtrl', MyCenterCtrl)

    .controller('TestCtrl', TestCtrl)

export default MyControllerModule
