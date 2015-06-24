'use strict';

/**
 * @ngdoc directive
 * @name solidCommerceApp.directive:fileInput
 * @description
 * # fileInput
 */
angular.module('solidCommerceApp')
    .directive('fileInput', function () {
        return {

            template: '<label class="col-sm-3 control-label" for="input_{{field.id}}">{{field.label}}</label>' +
                    '<div class="col-sm-9">'+
                        '<input ng-model="formData.field.label"  type="file"  id="input_{{field.id}}" placeholder="{{field.label}}">' +
                '</div>',

            restrict: 'A',

            scope: {
                field: "="
            }
        };
    });
