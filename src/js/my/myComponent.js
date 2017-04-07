import angular from 'angular'
import TestCom from './components/TestCom'

var MyComponentModule = 'MyComponentModule'

angular.module(MyComponentModule, [])
.component('testCom', TestCom)

export default MyComponentModule
