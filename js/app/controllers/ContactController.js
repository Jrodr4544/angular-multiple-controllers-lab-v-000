function ContactController() {
  var vm = this;
  
  vm.name  = 'contact_name'
  vm.email = 'contact_email';
  vm.phone = '000-000-0000';

  this.changeName = function () {
    vm.name = 'Something else!'
  }
}

angular
  .module('app')
  .controller('ContactController', ContactController)