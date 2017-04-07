import angular from 'angular'
import TestService from './services/TestService'

var MyServiceModule = 'MyServiceModule'

angular.module(MyServiceModule, [])
.service('TestService', TestService)

export default MyServiceModule
