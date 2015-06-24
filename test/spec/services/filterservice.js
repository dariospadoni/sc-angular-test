'use strict';

describe('Service: fieldsService', function () {

  // load the service's module
  beforeEach(module('solidCommerceApp'));

  // instantiate service
  var fieldsService;
  beforeEach(inject(function (_fieldsService_) {
      fieldsService = _fieldsService_;
  }));

  it('should have all methods defined', function () {
      expect(fieldsService).not.toBeUndefined();
      expect(fieldsService.loadFields).not.toBeUndefined();
      expect(fieldsService.selectField).not.toBeUndefined();
      expect(fieldsService.unselectField).not.toBeUndefined();
      expect(fieldsService.getSelectedFields).not.toBeUndefined();
  });

});

