(function () {
  'use strict';

  // Setting up route
  angular
    .module('dashboard.routes')
    .config(routeConfig);

  routeConfig.$inject = ['$stateProvider'];

  function routeConfig($stateProvider) {
    // Users state routing
    $stateProvider
      .state('dashboard', {
        abstract: true,
        url: '/dashboard',
        template: '<ui-view/>'
      })
      .state('dashboard.sales', {
        url: '/sales',
        templateUrl: './modules/dashboard/views/sales.dashboard-view.html',
        controller: 'DashboardController',
        controllerAs: 'vm'
      })

  }


}());