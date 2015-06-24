'use strict';

/**
 * @ngdoc service
 * @name solidCommerceApp.fieldService
 * @description
 * # fieldService
 * Service in the solidCommerceApp.
 */
angular
    .module('solidCommerceApp')

    .service('fieldsService', [

        '$http',

        function ($http) {
            var items = [];

            return {
                loadFields: loadFields,
                selectField: selectField,
                unselectField: unselectField,
                getSelectedFields: getSelectedFields
            }

            //////////////////////

            //get all fields from test json file
            function loadFields ()
            {
                console.log("loading fields from file...");
                return $http.get('../../data/fields.json');
            }

            function selectField(item){
                items.push(item);
            }

            function unselectField(item){
                items = _.without(items, item);
            }

            function getSelectedFields(){ return items;}
        }
    ]);
