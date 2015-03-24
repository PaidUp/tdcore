'use strict';
var assert = require('chai').assert;
var loanService = require('../services/loan.service');
var loanApplicationService = require('../services/loanApplication.service');
var tokenTDUser = 'TDLoanToken-CHANGE-ME!';

describe.only('loan.smokedtest', function() {

  before(function(done) {
    loanService.init({
      urlPrefix: '/api/v1',
      isHttps: false,
      host: 'localhost',
      port: 9004,
      token: 'TDLoanToken-CHANGE-ME!'
    });
    done();
  });

  it('loan simulate', function(done) {
    loanService.simulate({}, function(err, data) {
      assert(err.code);
      done();
    });

  });

  it('get loan', function(done) {
    this.timeout(60000);
    loanService.getLoan('123', function(err, data) {
      assert(err.code);
      done();
    });
  });

  it('save loan', function(done) {
    this.timeout(60000);
    loanService.save({}, function(err, data) {
        assert(err.code);
        done();
    });
  });

  it('find', function(done) {
    loanService.find({}, function(err, data) {
      assert.equal(0 , data.length);
      done();
    });
  });

  it('loan application create', function(done) {
    loanApplicationService.create({}, function(err, data) {
      assert(err.code);
      return done();
  });
  });

  it('loan application save', function(done) {
    loanApplicationService.save({}, function(err, data) {
      assert(err.code);
      return done();
    });
  });

  it('loan application state', function(done) {
    loanApplicationService.state({}, function(err, data) {
      assert(err.code);
      return done();
  });
  });

  it('loan application sign', function(done) {
    loanApplicationService.sign({}, function(err, data) {
      assert(err.code);
      return done();
  });
  });

  it('loan application payment', function(done) {
    loanApplicationService.payment({}, function(err, data) {
      assert(err.code);
      return done();
  });
  });

  it('loan application simulate', function(done) {
    loanApplicationService.simulate({}, function(err, data) {
      assert(err.code);
      return done();
  });
  });

  it('loan application contract', function(done) {
    loanApplicationService.contract({}, function(err, data) {
      assert(err.code);
      return done();
  });
  });

  it('loan application find', function(done) {
    loanApplicationService.find({}, function(err, data) {
        assert(err.code);
        return done();
  });
  });

});