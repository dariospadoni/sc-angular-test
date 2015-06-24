'use strict';

/**
 * @ngdoc overview
 * @name solidCommerceApp
 * @description
 * # solidCommerceApp
 *
 * Main module of the application.
 */
angular

    .module('solidCommerceApp', ['ui.router', 'ui.bootstrap', 'angular.filter'])

    .config(function($stateProvider, $urlRouterProvider) {

        //default state
        $urlRouterProvider.otherwise('/selectFields');

        $stateProvider
            //abstract route to load app global data
            .state('app', {
                url: '',
                abstract: true,
                template: '<ui-view/>',
                resolve: {
                    fields: ['fieldsService', function(fieldsService) {
                        return fieldsService.loadFields();
                    }]
                }
            })

            .state('app.selectFields', {
                url: '/selectFields',
                templateUrl: '../views/selectFields.html',
                resolve:{
                    fields: function(fields){ return fields.data; }
                },
                controller: 'SelectfieldscontrollerCtrl'
            })

            .state('app.form', {
                url: '/form',
                templateUrl: '../views/form.html',
                controller: 'FormcontrollerCtrl'
            });


    });


