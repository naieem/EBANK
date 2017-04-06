(function() {
  'use strict';
  angular.module('starter.controllers').controller('DashboardCtrl', DashboardCtrl);
  DashboardCtrl.$inject = ["$scope", "$state"];
  function DashboardCtrl($scope, $state) {
    $scope.months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];
    $scope.year = ["2017", "2018", "2019", "2020"];
    $scope.search = function(find) {
      if (find == undefined) {
        console.log("not found");
      } else {
        console.log(find);
        $state.go('app.details'); // go to login
      }
    }
  };

})();
