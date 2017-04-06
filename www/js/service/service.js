(function() {
  'use strict';
  angular.module('starter.controllers').factory('service', service);
  function service() {
    this.id = '';
    return {
      id: this.id,
      addId:addId
    };
    function addId(id){
      this.id=id;
    }
  }
})();
