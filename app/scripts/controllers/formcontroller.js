'use strict';

/**
 * @ngdoc function
 * @name solidCommerceApp.controller:FormcontrollerCtrl
 * @description
 * # FormcontrollerCtrl
 * Controller of the solidCommerceApp
 */
angular.module('solidCommerceApp')

    .controller('FormcontrollerCtrl', [

        '$scope',
        'fieldsService',

        function($scope,fieldsService){
            $scope.formData = {};
            $scope.formFields = fieldsService.getSelectedFields();

            $scope.onSubmit = function(){

                //check if form is valid before submitting
                if (_.findWhere($scope.formFields,{valid:false})===undefined)
                    alert("Form is valid, saving....");

            };
        }


    ]);
