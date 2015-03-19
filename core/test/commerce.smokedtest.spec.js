
'use strict';
var assert = require('assert');
var commerceService = require('../services/commerce.service.js');

var conn = {
  token: 'nodeCommercePass',
  urlPrefix : '/api/v1',
  isHttps: false,
  host: 'localhost',
  port: 9002
};

describe.only('commerce.smokedtest - commerce service test - ', function () {

    commerceService.init(conn);

    it('Create Cart', function (done) {this.timeout(60000);
        commerceService.cartCreate(function (err, data) {
      if (err) {
        return done(err);
      }
      assert.equal('ValidationError', data.code);
      return done();
    });
    });


});