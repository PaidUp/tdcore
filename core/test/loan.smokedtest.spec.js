'use strict';
var assert = require('chai').assert;
var loanService = require('../services/loan.service');
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
    loanService.loanSimulate({}, function(err, data) {
      if (err) {
        assert(err.code);
        return done();
      }
      return done(data);
    });
  });

  it('get loan', function(done) {
    this.timeout(60000);
    loanService.getLoan('123', function(err, data) {
      if (err) {
        assert(err.code);
        return done();
      }
      return done(data);
    });
  });

  it('loan application create', function(done) {
    loanService.loanApplicationCreate({}, function(err, data) {
      if (err) {
        assert(err.code);
        return done();
      }
      return done(data);
    });
  });

  it('loan application state', function(done) {
    loanService.loanApplicationState({}, function(err, data) {
      if (err) {
        assert(err.code);
        return done();
      }
      return done(data);
    });
  });

  it('loan application sign', function(done) {
    loanService.loanApplicationSign({}, function(err, data) {
      if (err) {
        assert(err.code);
        return done();
      }
      return done(data);
    });
  });

  it('loan application payment', function(done) {
    loanService.loanApplicationPayment({}, function(err, data) {
      if (err) {
        assert(err.code);
        return done();
      }
      return done(data);
    });
  });

  it('loan application simulate', function(done) {
    loanService.loanApplicationSimulate({}, function(err, data) {
      if (err) {
        assert(err.code);
        return done();
      }
      return done(data);
    });
  });

  it('loan application contract', function(done) {
    loanService.loanApplicationContract({}, function(err, data) {
      if (err) {
        assert(err.code);
        return done();
      }
      return done(data);
    });
  });

  it('loan application find', function(done) {
    loanService.loanApplicationFind({}, function(err, data) {
      if (err) {
        assert(err.code);
        return done();
      }
      return done(data);
    });
  });
});