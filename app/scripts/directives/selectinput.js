'use strict';

/**
 * @ngdoc directive
 * @name solidCommerceApp.directive:selectinput
 * @description
 * # selectinput
 */
angular.module('solidCommerceApp')
    .directive('selectInput', function () {
        return {

            template: '<label class="col-sm-3 control-label" for="input_{{field.id}}">{{field.label}}</label>' +
                '<div class="col-sm-9">' +
                    '<select ng-model="field.value" required="field.required" class="form-control" id="input_{{field.id}}"' +
                    ' ng-options="o as o for o in field.options"></select>' +
                '</div>',

            restrict: 'A',

            scope: {
                field: '='
            }
        };
  });
