'use strict';

var httpUtil = require('../http/http.util');
var config = require('../config/index');

function create(data, cb) {
  httpUtil.httpRequest(config.user.connection, config.methods.POST, data.body, '/api/users/', data.token, function (err, data) {
    if (err) {
      return cb(err);
    }
    return cb(null, data);
  });
}

exports.create = create;