'use strict';

/**
 * @ngdoc directive
 * @name solidCommerceApp.directive:dimensionsInput
 * @description
 * # dimensionsInput
 */
angular.module('solidCommerceApp')
    .directive('dimensionsInput', function () {
        return {
            template: '<div>' +
                    '<label class="col-sm-3 control-label">{{field.label}}</label>' +
                    '<div class="col-sm-3">' +
                        '<input type="number" ng-model="field.value.w" step="0.1" class="form-control" id="{{scope.field.label}}_width" placeholder="W" > '+
                    '</div>' +
                    '<div class="col-sm-3">' +
                        '<input type="number" ng-model="field.value.h" step="0.1" class="form-control" id="{{scope.field.label}}_width" placeholder="H" > '+
                    '</div>' +
                    '<div class="col-sm-3">' +
                        '<input type="number" ng-model="field.value.l" step="0.1" class="form-control" id="{{scope.field.label}}_width" placeholder="L" > '+
                    '</div>' +
                '</div>',

            restrict: 'A',

            scope: {
                field: '='
            }
        };
    });
