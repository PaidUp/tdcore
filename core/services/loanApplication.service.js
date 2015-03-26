/**
 * Created by riclara on 3/24/15.
 */
'use strict';

var httpUtil = require('../http/http.util');
var config = require('../config/index');
var urlencode = require('urlencode');

function init(connection) {
  config.app.connection = connection;
}

function create(data, cb) {
  httpUtil.httpRequest(config.app.connection, config.methods.POST, '/loan/application/create', data, function (err, data) {
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
  httpUtil.httpRequest(config.app.connection, config.methods.POST, '/loan/application/save', data, function (err, data) {
    if (err) {
      return cb(err);
    }
    if (data.status !== 200) {
      return cb(data.body);
    }
    return cb(null, data.body);
  });
}

function state(data, cb) {
  httpUtil.httpRequest(config.app.connection, config.methods.POST, '/loan/application/state', data, function (err, data) {
    if (err) {
      return cb(err);
    }
    if (data.status !== 200) {
      return cb(data.body);
    }
    return cb(null, data.body);
  });
}

function sign(data, cb) {
  httpUtil.httpRequest(config.app.connection, config.methods.POST, '/loan/application/sign', data, function (err, data) {
    if (err) {
      return cb(err);
    }
    if (data.status !== 200) {
      return cb(data.body);
    }
    return cb(null, data.body);
  });
}

function payment(data, cb) {
  httpUtil.httpRequest(config.app.connection, config.methods.POST, '/loan/application/payment', data, function (err, data) {
    if (err) {
      return cb(err);
    }
    if (data.status !== 200) {
      return cb(data.body);
    }
    return cb(null, data.body);
  });
}

function simulate(data, cb) {
  httpUtil.httpRequest(config.app.connection, config.methods.POST, '/loan/application/simulate', data, function (err, data) {
    if (err) {
      return cb(err);
    }
    if (data.status !== 200) {
      return cb(data.body);
    }
    return cb(null, data.body);
  });
}

function contract(data, cb) {
  httpUtil.httpRequest(config.app.connection, config.methods.POST, '/loan/application/contract', data, function (err, data) {
    if (err) {
      return cb(err);
    }
    if (data.status !== 200) {
      return cb(data.body);
    }
    return cb(null, data.body);
  });
}

function  find(applicationId, cb) {
  httpUtil.httpRequest(config.app.connection, config.methods.GET, '/loan/application/find/applicationId/'+urlencode(applicationId), null, function (err, data) {
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
  create : create,
  save : save,
  state : state,
  sign : sign,
  payment : payment,
  simulate : simulate,
  contract : contract,
  find : find
}