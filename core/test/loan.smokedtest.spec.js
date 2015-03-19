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

  it('application simulate', function(done) {
    loanService.applicationSimulate({}, function(err, data) {
      if (err) {
        assert(err.code);
        return done();
      }
      return done(data);
    });
  });
});