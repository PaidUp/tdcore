'use strict';

var httpUtil = require('../http/http.util');
var config = require('../config/index');

function authLocal(data, token, cb) {
  httpUtil.httpRequest(config.user.connection, config.methods.POST, data, '/api/v1/auth/local/signup', token, function (err, data) {
    if (err) {
      return cb(err);
    }
    return cb(null, data);
  });
}

exports.authLocal = authLocal;