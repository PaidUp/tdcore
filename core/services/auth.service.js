'use strict';

var httpUtil = require('../http/http.util');
var config = require('../config/index');

function signup(data, cb) {
  httpUtil.httpRequest(config.app.connection, config.methods.POST, '/auth/local/signup', data, function (err, data) {
    if (err) {
      return cb(err);
    }
    return cb(null, data);
  });
}

function logout(data, tokenUser, cb) {
  httpUtil.httpRequest(config.app.connection, config.methods.GET, '/auth/logout/userId/' + tokenUser, data, function (err, data) {
    if (err) {
      return cb(err);
    }
    return cb(null, data);
  });
}

function login(data, cb) {
  httpUtil.httpRequest(config.app.connection, config.methods.POST, '/auth/local/login', data, function (err, data) {
    if (err) {
      return cb(err);
    }
    return cb(null, data);
  });
}

function facebook(data, cb) {
  httpUtil.httpRequest(config.app.connection, config.methods.POST, '/auth/facebook/', data, function (err, data) {
    if (err) {
      return cb(err);
    }
    return cb(null, data);
  });
}

function verifyRequest(data, userId, cb) {
  httpUtil.httpRequest(config.app.connection, config.methods.GET, '/auth/verify-request/userId/' + userId, data, function (err, data) {
    if (err) {
      return cb(err);
    }
    return cb(null, data);
  });
}

function verify(data, userId, cb) {
  httpUtil.httpRequest(config.app.connection, config.methods.POST, '/auth/verify/userId/' + userId, data, function (err, data) {
    if (err) {
      return cb(err);
    }
    return cb(null, data);
  });
}

function passwordResetRequest(data, cb) {
  httpUtil.httpRequest(config.app.connection, config.methods.POST, '/auth/password/reset-request', data, function (err, data) {
    if (err) {
      return cb(err);
    }
    return cb(null, data);
  });
}

function passwordReset(data, cb) {
  httpUtil.httpRequest(config.app.connection, config.methods.POST, '/auth/password/reset', data, function (err, data) {
    if (err) {
      return cb(err);
    }
    return cb(null, data);
  });
}

function passwordUpdate(data, userId, cb) {
  httpUtil.httpRequest(config.app.connection, config.methods.POST, '/auth/password/update/userId/' + userId, data, function (err, data) {
    if (err) {
      return cb(err);
    }
    return cb(null, data);
  });
}

function emailUpdate(data, userId, cb) {
  httpUtil.httpRequest(config.app.connection, config.methods.POST, '/auth/email/update/userId/' + userId, data, function (err, data) {
    if (err) {
      return cb(err);
    }
    return cb(null, data);
  });
}

exports.signup = signup;
exports.logout = logout;
exports.login = login;
exports.facebook = facebook;
exports.verifyRequest = verifyRequest;
exports.verify = verify;
exports.passwordResetRequest = passwordResetRequest;
exports.passwordReset = passwordReset;
exports.passwordUpdate = passwordUpdate;
exports.emailUpdate = emailUpdate;