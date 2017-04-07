let TestCom = {
  bindings: {
    data: '<'
  },
  controller: [function () {
    let that = this
    that.title = 'TEST'
  }],
  controllerAs: 'vm',
  template: '' +
    '<div>' +
      'This is a {{ vm.title }} component' +
    '</div>'
}
export default TestCom
