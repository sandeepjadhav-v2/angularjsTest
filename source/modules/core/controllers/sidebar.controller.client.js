(function () {
    'use strict';

    angular
      .module('core')
      .controller('SidebarController', SidebarController);

    function SidebarController() {
      var vm = this;
      vm.location = 'Sidebar Controller';
      vm.menus = [
        {
          "name": "Dashboard",
          "url": "#",
          "icon": "fas fa-tachometer-alt",
          "subMenus": [
            {
              "name": "Sales Dashboard",
              "url": "dashboard.sales"
            }
          ]
        },{
          "name": "Master Settings",
          "url": "#",
          "icon": "fas fa-chart-bar",
          "subMenus": [
            {
              "name": "Company",
              "url": "master-settings.company"
            },{
              "name": "GST Slab",
              "url": "master-settings.gst-slab"
            },{
              "name": "Locations",
              "url": "locations"
            }
          ]
        }
      ];

      vm.config ={
        animation:true,
        data:[{
          icon : 'fa-home',
          label : 'Home',
          href: '/'
        }, {
        icon : 'fa-tachometer-alt',
        label : 'Dashboard',
        children : [
          {label : 'Sales Dashboard', icon : 'fa-circle', href : '/dashboard/sales'},
          {label : 'Save as...', icon : 'fa-circle',
          callback : function(item){
              // do whatever you need
            }
          },
          {label : 'Refresh', icon : 'fa-refresh'}
        ]}, {
        icon : 'fa-plane',
        label : 'Edit',
        children : [
          {label : 'Cut', icon : 'fa-circle'},
          {label : 'Copy', icon : 'fa-circle'},
          {label : 'Paste', icon : 'fa-circle'}
        ]}
      ]
    }

    }
  }());