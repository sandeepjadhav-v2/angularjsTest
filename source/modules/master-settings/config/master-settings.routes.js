(function () {
  'use strict';

  // Setting up route
  angular
    .module('master-settings.routes')
    .config(routeConfig);

  routeConfig.$inject = ['$stateProvider'];

  function routeConfig($stateProvider) {
    // Users state routing
    $stateProvider
      .state('master-settings', {
        abstract: true,
        url: '/master-settings',
        template: '<ui-view/>',
        ncyBreadcrumb: {
          label: 'Home'
        }
      })
      .state('master-settings.company', {
        url: '/company',
        templateUrl: './modules/master-settings/views/company.view.html',
        controller: 'MasterSettingsController',
        controllerAs: 'vm',
        ncyBreadcrumb: {
          label: 'Company',
          parent: 'master-settings' // Override the parent state (only for the breadcrumb).
        }
      })
      .state('master-settings.gst-slab', {
        url: '/gst-slab',
        templateUrl: './modules/master-settings/views/list-gstslab.view.html',
        controller: 'MasterSettingsController',
        controllerAs: 'vm',
        ncyBreadcrumb: {
          label: 'GST Slab',
          parent: 'master-settings' // Override the parent state (only for the breadcrumb).
        }
      })
  }


}());