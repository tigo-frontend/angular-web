export default class TestService {
  constructor (CW) {
    console.log(CW)
    return function () {
      return 'test service'
    }
  }
}
TestService.$inject = ['CW']
