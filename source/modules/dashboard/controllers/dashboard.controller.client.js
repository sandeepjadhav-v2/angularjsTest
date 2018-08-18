(function() {
  "use strict";

  angular.module("core").controller("DashboardController", DashboardController);

  DashboardController.$inject = ['$scope', "$http", "Notification"];
  function DashboardController($scope, $http, Notification) {
    var vm = this;
    vm.gridOptions1 = {
      enableFiltering: true,
      paginationPageSizes: [25, 50, 75, 100],
      paginationPageSize: 10
    };
    vm.location = "Dashboard Controller";
    console.log(vm.location);

    $http
      .get(
        "https://cdn.rawgit.com/angular-ui/ui-grid.info/gh-pages/data/100.json"
      )
      .then(function(response) {
        vm.gridOptions1.data = response.data;
      });

    $scope.primary = function() {
      Notification("Primary notification");
    };

    $scope.error = function() {
      Notification.error("Error notification");
    };

    $scope.success = function() {
      Notification.success("Success notification");
    };

    $scope.info = function() {
      Notification.info("Information notification");
    };

    $scope.warning = function() {
      Notification.warning("Warning notification");
    };

    // ==

    $scope.primaryTitle = function() {
      Notification({
        message: "Primary notification",
        title: "Primary notification"
      });
    };

    // ==

    $scope.errorTime = function() {
      Notification.error({ message: "Error notification 1s", delay: 1000 });
    };

    $scope.successTime = function() {
      Notification.success({
        message: "Success notification 20s",
        delay: 20000
      });
    };

    // ==

    $scope.errorHtml = function() {
      Notification.error({
        message: "<b>Error</b> <s>notification</s>",
        title: "<i>Html</i> <u>message</u>"
      });
    };

    $scope.successHtml = function() {
      Notification.success({
        message:
          'Success notification<br>Some other <b>content</b><br><a href="https://github.com/alexcrack/angular-ui-notification">This is a link</a><br><img src="https://angularjs.org/img/AngularJS-small.png">',
        title: "Html content"
      });
    };
  }
})();
