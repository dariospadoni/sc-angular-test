'use strict';

describe('Directive: inputText', function () {

    // load the directive's module
    beforeEach(module('solidCommerceApp'));

    var element,
        scope;

    beforeEach(inject(function ($rootScope) {
        scope = $rootScope.$new();
        scope.field = {
            "id": 1,
            "label": "Product name",
            "type": "text",
            "required": true,
            "group": "Group 1",
            "value": "test value"
        }
        Compile();
    }));

    //compile the directive
    function Compile() {
        inject(function ($compile) {
            element = angular.element('<div text-input field="field"></div>');
            element = $compile(element)(scope);
            scope.$digest();
        });
    }

    it('should render an input with the right value', function(){
        expect(element.find('input').length).toBe(1);
        expect(element.find('input').val()).toBe('test value');
    });

    it('should validate required field on blur', function(){
        element.find('input').val('').blur();
        expect(scope.field.valid == false);
        expect(element.find('.has-error').length).toBe(1);
    });

});
