export default class MyCenterCtrl {
  constructor (CW, TestService, $window) {
    let that = this
    that.window = $window
    that.title = 'My Center'

    console.log(TestService())
  }

  gotoIndex () {
    this.window.location.href = 'index.html'
  }

  gotoIndexTest ($window) {
    this.window.location.href = 'index.html#!/test'
  }
}
MyCenterCtrl.$inject = ['CW', 'TestService', '$window']
