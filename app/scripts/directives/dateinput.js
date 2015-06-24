'use strict';

/**
 * @ngdoc directive
 * @name solidCommerceApp.directive:dateInput
 * @description
 * # dateInput
 */
angular.module('solidCommerceApp')
    .directive('dateInput', function () {
        return {

            template: '<label class="col-sm-3 control-label" for="input_{{field.id}}">{{field.label}}</label>' +
                    '<div class="col-sm-9"><p class="input-group">' +
                        '<input type="text" class="form-control" datepicker-popup is-open="opened"  ng-model="field.value"  >' +
                        '<span class="input-group-btn">' +
                            '<button type="button" class="btn btn-default" ng-click="open($event)"><i class="glyphicon glyphicon-calendar"></i></button>' +
                        '</span>' +
                '</p></div>',

            restrict: 'A',

            scope: {
                field: '='
            },

            link: function(scope, element) {

                //add onblur handler for minLength validation if requested
                if (scope.field.required) {
                    var input = $(element).find('input');

                    input.on('blur', function () {

                        //remove errors messages and classes
                        element.find('.help-block').remove();
                        input.closest('.form-group').removeClass('has-error');
                        scope.field.valid = true;

                        //validate required field
                        if (input.val() == '') {
                            input
                                .parent()
                                .append('<span class="help-block">Required field</span>')
                                .closest('.form-group')
                                .addClass('has-error');
                            scope.field.valid = false;
                        }

                    });
                }
            },

            controller: function($scope){

                $scope.open = function($event) {
                    $event.preventDefault();
                    $event.stopPropagation();

                    $scope.opened = true;
                };
            }
        };
    });
