'use strict';

var httpUtil = require('../http/http.util');
var config = require('../config/index');

function create(data, token, cb) {
  httpUtil.httpRequest(config.user.connection, config.methods.POST, data, '/api/users/', data, function (err, data) {
    if (err) {
      return cb(err);
    }
    return cb(null, data);
  });
}

exports.create = create;