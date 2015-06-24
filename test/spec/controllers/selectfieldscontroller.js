'use strict';

describe('Controller: SelectfieldscontrollerCtrl', function () {

    // load the controller's module
    beforeEach(module('solidCommerceApp'));

    var SelectfieldscontrollerCtrl,
        scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        SelectfieldscontrollerCtrl = $controller('SelectfieldscontrollerCtrl', {
            $scope: scope,
            fields: [
                {
                    "id": 1,
                    "label": "Product name",
                    "type": "text",
                    "required": true,
                    "group": "Group 1"
                },
                {
                    "id": 2,
                    "label": "SKU",
                    "type": "text",
                    "required": true,
                    "group": "Group 1"
                }
            ]
        });
    }));

    it('should select and unselect fields', function () {
        expect(scope.availableFields.length).toBe(2);
        scope.toggleField(scope.availableFields[1]);
        expect(scope.selectedFields().length).toBe(1);
        expect(scope.unselectedFields().length).toBe(1);
        scope.toggleField(scope.availableFields[1]);
        expect(scope.selectedFields().length).toBe(0);
        expect(scope.unselectedFields().length).toBe(2);
    });
});
