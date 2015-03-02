
'use strict';
var assert = require('assert');
var paymentService = require('../services/payment.services');

var customer = {};
var tokenPayment = 'nodePaymentPass';

describe.only('payment services test', function () {
  it('createCustomer', function (done) {
  var data = {
      user:{
          name: user.firstName + " " + user.lastName,
          email: user.email,
          meta: { csId: user.id}
      }
  };
    paymentService.createCustomer(data, tokenPayment, function (err, data) {
      if (err) {
          console.log("Err");
          console.log(err);
        return done(err);
      }
        console.log("Data");
        console.log(data);
        assert.(data._id);
        return done();
    });
  });
});