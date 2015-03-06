'use strict';

var httpUtil = require('../http/http.util');
var config = require('../config/index');

function create(data, token, cb) {

  httpUtil.httpRequest(config.user.connection, config.methods.POST, data, '/api/v1/user/create', token, function (err, data) {
    if (err) {
      return cb(err);
    }
    return cb(null, data);
  });
}

function current(data, token, tokenUser, cb) {
  httpUtil.httpRequest(config.user.connection, config.methods.GET, data, '/api/v1/user/current/?token='+tokenUser, token, function (err, data) {
    if (err) {
      return cb(err);
    }
    return cb(null, data);
  });
}

function update(data, token, userId, cb) {
  httpUtil.httpRequest(config.user.connection, config.methods.POST, data, '/api/v1/user/update/userId/'+userId, token, function (err, data) {
    if (err) {
      return cb(err);
    }
    return cb(null, data);
  });
}

exports.create = create;
exports.current = current;
exports.update = update;