'use strict';
var assert = require('assert');
var userService = require('../services/user.services');

describe('user services test', function () {
  it('create', function (done) {
    var token = '';
    userService.create(token, function (err, data) {
      if (err) {
        return done(err);
      }
      assert.deepEqual({},data);
      return done();
    });
  });
});