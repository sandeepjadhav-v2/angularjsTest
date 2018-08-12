(function () {
  'use strict';

  angular
    .module('core')
    .controller('MasterSettingsController', MasterSettingsController);

  function MasterSettingsController() {
    var vm = this;
    vm.location = 'MasterSettings Controller';
    console.log(vm.location);
  }
}());