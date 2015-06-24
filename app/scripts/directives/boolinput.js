'use strict';

/**
 * @ngdoc directive
 * @name solidCommerceApp.directive:boolInput
 * @description
 * # boolInput
 */
angular.module('solidCommerceApp')
    .directive('boolInput', function () {
        return {

            template: '<div class="checkbox">' +
                    '<label>' +
                        '<input ng-model="field.value" type="checkbox" ng-checked="field.default"> {{field.label}}'+
                    '</label>'+
                '</div>',

            restrict: 'A',

            scope: {
                field: "="
            }
        };
  });
