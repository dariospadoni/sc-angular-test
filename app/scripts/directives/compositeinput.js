'use strict';

/**
 * @ngdoc directive
 * @name solidCommerceApp.directive:compositeInput
 * @description
 * # compositeInput
 */
angular.module('solidCommerceApp')
    .directive('compositeInput', function () {
        return {

            template: '<div class="compositeInput">' +
                    '<label class="col-sm-3 control-label">{{field.label}}</label>' +
                    '<div class="col-sm-9">'+
                        '<select class="form-control col-sm-4" ng-model="field.value.option" ng-options="o as o for o in field.subFields.select.options"></select>' +
                        '<input class="form-control col-sm-offset-1 col-sm-4" ng-model="field.value.value" type="text" >' +
                    '</div>' +
                '</div>',

            restrict: 'A',

            scope: {
                field: "="
            }
        };
    });
