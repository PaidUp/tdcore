'use strict';

var httpUtil = require('../http/http.util');
var config = require('../config/index');

function signup(data, token, cb) {
  httpUtil.httpRequest(config.user.connection, config.methods.POST, data, config.path + '/auth/local/signup', token, function (err, data) {
    if (err) {
      return cb(err);
    }
    return cb(null, data);
  });
}

function logout(data, token, tokenUser, cb) {
  httpUtil.httpRequest(config.user.connection, config.methods.GET, data, config.path + '/auth/logout/userId/' + tokenUser, token, function (err, data) {
    if (err) {
      return cb(err);
    }
    return cb(null, data);
  });
}

function login(data, token, cb) {
  httpUtil.httpRequest(config.user.connection, config.methods.POST, data, config.path + '/auth/local/login', token, function (err, data) {
    if (err) {
      return cb(err);
    }
    return cb(null, data);
  });
}

function facebook(data, token, cb) {
  httpUtil.httpRequest(config.user.connection, config.methods.POST, data, config.path + '/auth/facebook/', token, function (err, data) {
    if (err) {
      return cb(err);
    }
    return cb(null, data);
  });
}

function verifyRequest(data, token, userId, cb) {
  httpUtil.httpRequest(config.user.connection, config.methods.GET, data, config.path + '/auth/verify-request/userId/' + userId, token, function (err, data) {
    if (err) {
      return cb(err);
    }
    return cb(null, data);
  });
}

function verify(data, token, userId, cb) {
  httpUtil.httpRequest(config.user.connection, config.methods.POST, data, config.path + '/auth/verify/userId/' + userId, token, function (err, data) {
    if (err) {
      return cb(err);
    }
    return cb(null, data);
  });
}

function passwordResetRequest(data, token, cb) {
  httpUtil.httpRequest(config.user.connection, config.methods.POST, data, config.path + '/auth/password/reset-request', token, function (err, data) {
    if (err) {
      return cb(err);
    }
    return cb(null, data);
  });
}

function passwordReset(data, token, cb) {
  httpUtil.httpRequest(config.user.connection, config.methods.POST, data, config.path + '/auth/password/reset', token, function (err, data) {
    if (err) {
      return cb(err);
    }
    return cb(null, data);
  });
}

function passwordUpdate(data, token, userId, cb) {
  httpUtil.httpRequest(config.user.connection, config.methods.POST, data, config.path + '/auth/password/update/userId/' + userId, token, function (err, data) {
    if (err) {
      return cb(err);
    }
    return cb(null, data);
  });
}

function emailUpdate(data, token, userId, cb) {
  httpUtil.httpRequest(config.user.connection, config.methods.POST, data, config.path + '/auth/email/update/userId/' + userId, token, function (err, data) {
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