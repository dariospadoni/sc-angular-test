'use strict';

/**
 * @ngdoc function
 * @name solidCommerceApp.controller:SelectfieldscontrollerCtrl
 * @description
 * # SelectfieldscontrollerCtrl
 * Controller of the solidCommerceApp
 */
angular.module('solidCommerceApp')

    .controller('SelectfieldscontrollerCtrl',[

        '$scope',
        'fields',
        'fieldsService',

        function ($scope, fields, fieldsService) {

            $scope.availableFields = fields;

            $scope.accordionOpened=true;

            //return the  list of unselected fields
            $scope.unselectedFields = function() {
                return _.difference($scope.availableFields, fieldsService.getSelectedFields());
            };

            //return the  list of selected fields
            $scope.selectedFields = function() {
                return fieldsService.getSelectedFields();
            };

            //toggle a field selection
            $scope.toggleField = function(field){
                if(_.findWhere(fieldsService.getSelectedFields(), {id: field.id})!=undefined)
                    fieldsService.unselectField(field);
                else
                    fieldsService.selectField(field);
            };

            $scope.onTypeaheadSelect = function ($item) {
                if(_.findWhere(fieldsService.getSelectedFields(), {id: $item.id})==undefined)
                    fieldsService.selectField($item);
                $scope.selectedField = '';
            };
        }
    ]);
