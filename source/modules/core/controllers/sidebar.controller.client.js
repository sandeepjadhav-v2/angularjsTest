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
        icon : 'fa-cog',
        label : 'Dashboard',
        children : [
          {label : 'Sales Dashboard', icon : 'fa-circle', href : '/dashboard/sales'}
        ]}, {
        icon : 'fa-plane',
        label : 'Master Settings',
        children : [
          {label : 'Company', icon : 'fa-circle',  href : '/master-settings/company'},
          {label : 'Copy', icon : 'fa-circle',  href : '/master-settings/gst-slab'},
          {label : 'Paste', icon : 'fa-circle'}
        ]}
      ]
    }

    }
  }());