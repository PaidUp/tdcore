'use strict';

var httpUtil = require('../http/http.util');
var config = require('../config/index');
var urlencode = require('urlencode');

function init(connection) {
    config.app.connection = connection;
};

function simulate(data, cb) {
  httpUtil.httpRequest(config.app.connection, config.methods.POST, '/loan/simulate', data, function (err, data) {
    if (err) {
      return cb(err);
    }
    if (data.status !== 200) {
      return cb(data.body);
    }
    return cb(null, data.body);
  });
}

function getLoan(loanId, cb) {
  httpUtil.httpRequest(config.app.connection, config.methods.GET, '/loan/find/loanId/'+loanId, null, function (err, data) {
    if (err) {
      return cb(err);
    }
    if (data.status !== 200) {
      return cb(data.body);
    }
    return cb(null, data.body);
  });
}

function save(data, cb) {
  httpUtil.httpRequest(config.app.connection, config.methods.POST, '/loan/save', data, function (err, data) {
    if (err) {
      return cb(err);
    }
    if (data.status !== 200) {
      return cb(data.body);
    }
    return cb(null, data.body);
  });
}

function find(data, cb) {
  httpUtil.httpRequest(config.app.connection, config.methods.POST, '/loan/find', data, function (err, data) {
    if (err) {
      return cb(err);
    }
    if (data.status !== 200) {
      return cb(data.body);
    }
    return cb(null, data.body);
  });
}



module.exports = {
  init : init,
  simulate : simulate,
  getLoan : getLoan,
  save : save,
  find : find
}

