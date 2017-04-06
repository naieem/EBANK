(function() {
  'use strict';
  angular.module('starter.controllers').controller('DetailsCtrl', DetailsCtrl);
  DetailsCtrl.$inject = ["$scope", "$stateParams", "$mdBottomSheet", "service","$mdDialog"];

  function DetailsCtrl($scope, $stateParams, $mdBottomSheet, service,$mdDialog) {
    $scope.todos = [
      {
        what: 'Brunch this weekend?',
        who: 'Min Li Chan',
        when: '3:08PM',
        notes: " I'll be in your neighborhood doing errands"
      }, {
        what: 'Brunch this weekend?',
        who: 'Min Li sdfsd',
        when: '3:08PM',
        notes: " I'll be in your neighborhood doing errands"
      }, {
        what: 'Brunch this weekend?',
        who: 'fgdfg Li Chan',
        when: '3:08PM',
        notes: " I'll be in your neighborhood doing errands"
      }, {
        what: 'Brunch this weekend?',
        who: 'gjjgh Li Chan',
        when: '3:08PM',
        notes: " I'll be in your neighborhood doing errands"
      }, {
        what: 'Brunch this weekend?',
        who: 'Min ghjgh Chan',
        when: '3:08PM',
        notes: " I'll be in your neighborhood doing errands"
      }
    ];
    $scope.date = new Date();
    $scope.edit = function(ev) {
        $mdDialog.show({
          controller: DetailsCtrl,
          templateUrl: 'templates/edit.tmpl.html',
          parent: angular.element(document.body),
          targetEvent: ev,
          clickOutsideToClose: true,
          fullscreen: false // Only for -xs, -sm breakpoints.
        }).then(function(answer) {
          $scope.status = 'You said the information was "' + answer + '".';
        }, function() {
          $scope.status = 'You cancelled the dialog.';
        });
      console.log("edit clicked", service.id);
    }
    $scope.delete = function() {
      console.log("delete clicked");
    }
    $scope.showListBottomSheet = function(id) {
      service.addId(id);
      $mdBottomSheet.show({templateUrl: 'templates/bottomSheet/bottomSheet.html', controller: 'DetailsCtrl'}).then(function(clickedItem) {
        // $scope.alert = clickedItem['name'] + ' clicked!';
      });
    };
  };
})();
