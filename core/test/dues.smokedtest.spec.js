
'use strict';
var assert = require('chai').assert
var duesService = require('../services/dues.service.js');

var conn = {
  token: 'tdschedule-secret',
  urlPrefix : '/api/v2',
  isHttps: false,
  host: 'localhost',
  port: 9006
};

var result = {};

before(function(done){
  duesService.init(conn);
  done();
});

describe('dues services test', function () {


  it('generate dues', function (done) {
    let param = {}
    duesService.generateDues(param, function (err, data) {

      assert.equal('processingFees is required', err);
      done();
    });
  });


});