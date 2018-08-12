(function () {
  'use strict';

  angular
    .module('core')
    .controller('DashboardController', DashboardController);

  function DashboardController() {
    var vm = this;
    vm.location = 'Dashboard Controller';
    console.log(vm.location);
  }
}());