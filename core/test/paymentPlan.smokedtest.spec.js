
'use strict';
var assert = require('chai').assert
var paymentPlanService = require('../services/paymentPlan.service.js');

var conn = {
  token: 'nodePaymentPass',
  urlPrefix : '/api/v2',
  isHttps: false,
  host: 'localhost',
  port: 9006
};

var result = {};

before(function(){
  paymentPlanService.init(conn);
});

describe('payment services test', function () {
  paymentPlanService.init(conn);
  this.timeout(10000);

  it('create payment plan', function (done) {
    let param = {name:'testName',
      destination:'destinationTest'}
    paymentPlanService.paymentPlanCreate(param, function (err, data) {
      if (err) {
        return done(err);
      }
      result.paymentPlanId = data.paymentPlanId;
      assert.isString(data.paymentPlanId);
      done();
    });
  });

  it('update payment plan', function (done) {
    let param = {paymentPlanId:result.paymentPlanId,
      playmentPlanData: {name:'testName3',
        destination:'destinationTest3'}};
    paymentPlanService.paymentPlanUpdate(param, function (err, data) {

      console.log('error' ,err);
      console.log('data' ,data);
      if (err) {
        return done(err);
      }
      assert.isTrue(data.updated);
      done();
    });
  });

  it('get info payment plan', function (done) {
    paymentPlanService.paymentPlanInfo(result.paymentPlanId, function (err, data) {
      //console.log('error' ,err);
      console.log('data' ,data);
      if (err) {
        return done(err);
      }
      assert.isObject(data);
      done();
    });
  });


});