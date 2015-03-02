'use strict';
var assert = require('assert');
var userService = require('../services/user.service');
var faker = require('faker');

describe('user services test', function () {
  it('create', function (done) {
    var body = {
      firstName : faker.name.firstName(),
      lastName : faker.name.lastName()
    };
    var token = 'TokenDestiny';
    userService.create(body, token, function (err, data) {
      console.log('data', data);
      if (err) {
        return done(err);
      }
      assert(data.userId);
      return done();
    });
  });
});