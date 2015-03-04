'use strict';
var assert = require('assert');
var userService = require('../services/user.service');
var faker = require('faker');
var tokenUser = 'NodeUserTOKEN';

describe('user services test', function () {
  it('create', function (done) {
    var data = {
      firstName : faker.name.firstName(),
      lastName : faker.name.lastName()
    };
    
    userService.create(data, tokenUser, function (err, data) {
      if (err) {
        return done(err);
      }
      assert(data.userId);
      return done();
    });
  });
});