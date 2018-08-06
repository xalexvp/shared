'use strict';

describe('myApp.grocery module', function() {

  beforeEach(module('myApp.grocery'));

  describe('grocery controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var groceryCtrl = $controller('groceryCtrl');
      expect(groceryCtrl).toBeDefined();
    }));

  });
});