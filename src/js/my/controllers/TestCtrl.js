export default class TestCtrl {
  constructor (CW, $location) {
    let that = this
    that.title = 'My Center'
    console.log($location.search())
  }
}
TestCtrl.$inject = ['CW', '$location']
