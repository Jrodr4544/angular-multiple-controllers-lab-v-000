function StaffController() {
  var vm = this;

  vm.name  = 'name';
  vm.email = 'email';
  vm.phone = '123-123-1234';
}

angular
  .module('app')
  .controller('StaffController', StaffController);