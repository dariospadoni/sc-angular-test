'use strict';

/**
 * @ngdoc directive
 * @name solidCommerceApp.directive:textInput
 * @description
 * # textInput
 */
angular.module('solidCommerceApp')
    .directive('textInput', function () {
        return {

            template: '<div class="form-group">' +
                '<label class="col-sm-3 control-label" for="input_{{field.id}}">{{field.label}}</label>' +
                '<div class="col-sm-9">' +
                    '<input ng-model="field.value"  type="text" class="form-control" id="input_{{field.id}}" placeholder="{{field.label}}">' +
                '</div>' +
            '</div>',

            restrict: 'A',

            scope: {
                field: '='
            },

            link: function(scope, element){

                var input = $(element).find('input');

                //add onblur handler for minLength validation if requested
                if(scope.field.minLength || scope.field.validation || scope.field.required)
                {
                    input.on('blur',function(){

                        MarkValid();
                        Validate();
                    });
                }

                function Validate () {

                    //validate required
                    if(scope.field.required && input.val()=='')
                    {
                        MarkInvalid('Required field');
                        return;
                    }

                    //validate the input length
                    if(scope.field.minLength && input.val().length < scope.field.minLength)
                    {
                        MarkInvalid('Minimum of ' + scope.field.minLength + ' characters');
                        return;
                    }

                    //validate integer
                    if(scope.field.validation && scope.field.validation=='integer' && !IsInteger(input.val()))
                    {
                        MarkInvalid('Please insert a valid integer number');
                        return;
                    }

                    //validate decimal
                    if(scope.field.validation && scope.field.validation=='decimal' && !IsDecimal(input.val()))
                    {
                        MarkInvalid('Please insert a valid decimal number');
                        return;
                    }
                };

                function MarkValid(){
                    //remove errors messages and classes
                    element.find('.help-block').remove();
                    input.closest('.form-group').removeClass('has-error');
                    scope.field.valid=true;
                };

                function MarkInvalid(errorMsg){
                    input
                        .parent()
                        .append('<span class="help-block">'+errorMsg+'</span>')
                        .closest('.form-group')
                        .addClass('has-error');
                    scope.field.valid=false;
                };

                function IsDecimal(n) {
                    return /^\d+(\.\d{1,2})?$/.test(n);
                };

                function IsInteger(n) {
                    return /^\+?(0|[1-9]\d*)$/.test(n);
                };

                Validate();
            }
        };
    });
