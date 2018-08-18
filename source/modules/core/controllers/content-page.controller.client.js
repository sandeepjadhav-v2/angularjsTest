
(function () {
  'use strict';

  angular
    .module('core')
    .controller('ContentController', ContentController);

    ContentController.$inject = ['$scope'];
  function ContentController($scope) {
    var vm = this;
    vm.location = 'Content Controller';
    $scope.uiConfig = {
      calendar:{
        height: 450,
        editable: true,
        header:{
          left: 'month basicWeek basicDay agendaWeek agendaDay',
          center: 'title',
          right: 'today prev,next'
        },
        eventClick: $scope.alertEventOnClick,
        eventDrop: $scope.alertOnDrop,
        eventResize: $scope.alertOnResize
      }
    };

  }
}());