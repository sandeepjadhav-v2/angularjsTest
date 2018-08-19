(function() {
  "use strict";

  angular.module("core").controller("SidebarController", SidebarController);

  SidebarController.$inject = ["$scope", "$transitions", "$state"];
  function SidebarController($scope, $transitions, $state) {
    var vm = this;
    vm.isCollapsed = false;

    vm.location = "Sidebar Controller";
    console.log(vm.location);
    vm.mainMenu = {
      animation: true,
      data: [
        {
          icon: "fa-home",
          label: "Home",
          href: "/",
          state: "home",
          title: 'Home',
          children: []
        },
        {
          icon: "fa-cog",
          label: "Dashboard",
          state: "dashboard",
          title: 'Dashboard',
          children: [
            {
              label: "Sales Dashboard",
              icon: "fa-circle",
              state: "dashboard.sales",
              href: "/dashboard/sales"
            }
          ]
        },
        {
          icon: "fa-plane",
          label: "Master Settings",
          state: "master-settings",
          title: 'Master Settings',
          children: [
            {
              label: "Company",
              icon: "fa-circle",
              state: "master-settings.company",
              href: "/master-settings/company"
            },
            {
              label: "Copy",
              icon: "fa-circle",
              state: "master-settings.gst-slab",
              href: "/master-settings/gst-slab"
            },
            {
              label: "Paste",
              icon: "fa-circle",
              state: "master-settings.sales"
            }
          ]
        }
      ]
    };

    $transitions.onSuccess("$stateChangeSuccess", stateChangeSuccess);

    function stateChangeSuccess() {
      vm.isCollapsed = false;
      var forceCloseMainMenu = false;
      for (var i = 0; i < vm.mainMenu.data.length; i++) {
        var menuItem = vm.mainMenu.data[i];
        if ($state.current.name === "home") {
          forceCloseMainMenu = true;
        }
        if (
          !checkIfCurrentStateBelongsToMenu(vm.mainMenu) &&
          !forceCloseMainMenu
        ) {
          return;
        }
        menuItem.active = false;
        for (var si = 0; si < menuItem.children.length; si++) {
          var menuSubItem = menuItem.children[si];
          if (
            menuSubItem.state !== "" &&
            menuSubItem.state === $state.current.name
          ) {
            menuSubItem.active = true && !forceCloseMainMenu;
            menuItem.active = true && !forceCloseMainMenu;
          } else {
            menuSubItem.active = false;
          }
        }
      }
    }

    function checkIfCurrentStateBelongsToMenu(menu) {
      var belongstoMenu = 0;
      for (var i = 0; i < menu.data.length; i++) {
        var menuItem = menu.data[i];
        for (var si = 0; si < menuItem.children.length; si++) {
          var menuSubItem = menuItem.children[si];
           if (
            menuSubItem.state !== "" &&
            menuSubItem.state === $state.current.name
          ) {
            belongstoMenu = 1;
            return belongstoMenu;
          }
        }
      }
       return belongstoMenu;
    }
  }
})();
