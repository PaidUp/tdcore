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

function find(data, token, userId, cb) {
  httpUtil.httpRequest(config.user.connection, config.methods.POST, data, '/api/v1/user/find', token, function (err, data) {
    if (err) {
      return cb(err);
    }
    return cb(null, data);
  });
}

function contactCreate(data, token, userId, cb) {
  httpUtil.httpRequest(config.user.connection, config.methods.POST, data, '/api/v1/user/contact/create/userId/'+userId, token, function (err, data) {
    if (err) {
      return cb(err);
    }
    return cb(null, data);
  });
}

function contactList(data, token, userId, cb) {
  httpUtil.httpRequest(config.user.connection, config.methods.POST, data, '/api/v1/user/contact/list/userId/'+userId, token, function (err, data) {
    if (err) {
      return cb(err);
    }
    return cb(null, data);
  });
}


exports.create = create;
exports.current = current;
exports.update = update;
exports.find = find;
exports.contactCreate = contactCreate;
exports.contactList = contactList;