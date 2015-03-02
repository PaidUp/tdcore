
'use strict';
var assert = require('assert');
var paymentService = require('../services/payment.services');

var customer = {};

describe('payment services test', function () {
  it('createCustomer', function (done) {
      var data = {
          token:'',
          body:{
              user:{
                  name: user.firstName + " " + user.lastName,
                  email: user.email,
                  meta: { csId: user.id}
              }
          }
      };
    paymentService.createCustomer(token, function (err, data) {
      if (err) {
        return done(err);
      }
      assert.(data._id);
      return done();
    });
  });
});