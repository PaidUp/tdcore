'use strict';

var httpUtil = require('../http/http.util');
var config = require('../config/index');

function init(connection){
  config.app.connection = connection;
}

function create(data, cb) {
  httpUtil.httpRequest(config.app.connection, config.methods.POST, '/user/create', data, function (err, data) {
    if (err) {
      return cb(err);
    }
    return cb(null, data);
  });
}

function current(data, tokenUser, cb) {
  httpUtil.httpRequest(config.app.connection, config.methods.GET, '/user/current/?token='+tokenUser, data, function (err, data) {
    if (err) {
      return cb(err);
    }
    return cb(null, data);
  });
}

function update(data, userId, cb) {
  httpUtil.httpRequest(config.app.connection, config.methods.POST, '/user/update/userId/'+userId, data, function (err, data) {
    if (err) {
      return cb(err);
    }
    return cb(null, data);
  });
}

function find(data, userId, cb) {
  httpUtil.httpRequest(config.app.connection, config.methods.POST, '/user/find', data, function (err, data) {
    if (err) {
      return cb(err);
    }
    return cb(null, data);
  });
}

function contactCreate(data, userId, cb) {
  httpUtil.httpRequest(config.app.connection, config.methods.POST, '/user/contact/create/userId/'+userId, data, function (err, data) {
    if (err) {
      return cb(err);
    }
    return cb(null, data);
  });
}

function contactList(data, userId, cb) {
  httpUtil.httpRequest(config.app.connection, config.methods.POST, '/user/contact/list/userId/'+userId, data, function (err, data) {
    if (err) {
      return cb(err);
    }
    return cb(null, data);
  });
}

function contactLoad(data, userId, contactId, cb) {
  httpUtil.httpRequest(config.app.connection, config.methods.GET, '/user/contact/load/userId/'+userId+'/contactId/'+contactId, data, function (err, data) {
    if (err) {
      return cb(err);
    }
    return cb(null, data);
  });
}

function contactUpdate(data, userId, contactId, cb) {
  httpUtil.httpRequest(config.app.connection, config.methods.PUT, '/user/contact/update/userId/'+userId+'/contactId/'+contactId, data, function (err, data) {
    if (err) {
      return cb(err);
    }
    return cb(null, data);
  });
}

function contactDelete(data, userId, contactId, cb) {
  httpUtil.httpRequest(config.app.connection, config.methods.DELETE, '/user/contact/delete/userId/'+userId+'/contactId/'+contactId, data, function (err, data) {
    if (err) {
      return cb(err);
    }
    return cb(null, data);
  });
}

function addressCreate(data, userId, cb) {
  httpUtil.httpRequest(config.app.connection, config.methods.POST, '/user/address/create/userId/'+userId, data, function (err, data) {
    if (err) {
      return cb(err);
    }
    return cb(null, data);
  });
}

function addressList(data, userId, cb) {
  httpUtil.httpRequest(config.app.connection, config.methods.POST, '/user/address/list/userId/'+userId, data, function (err, data) {
    if (err) {
      return cb(err);
    }
    return cb(null, data);
  });
}

function addressLoad(data, userId, addressId, cb) {
  httpUtil.httpRequest(config.app.connection, config.methods.GET, '/user/address/load/userId/'+userId+'/addressId/'+addressId, data, function (err, data) {
    if (err) {
      return cb(err);
    }
    return cb(null, data);
  });
}

function addressUpdate(data, userId, addressId, cb) {
  httpUtil.httpRequest(config.app.connection, config.methods.PUT, '/user/address/update/userId/'+userId+'/addressId/'+addressId, data, function (err, data) {
    if (err) {
      return cb(err);
    }
    return cb(null, data);
  });
}

function addressDelete(data, userId, addressId, cb) {
  httpUtil.httpRequest(config.app.connection, config.methods.DELETE, '/user/address/delete/userId/'+userId+'/addressId/'+addressId, data, function (err, data) {
    if (err) {
      return cb(err);
    }
    return cb(null, data);
  });
}

function relationCreate(data, cb) {
  httpUtil.httpRequest(config.app.connection, config.methods.POST, '/user/relation/create', data, function (err, data) {
    if (err) {
      return cb(err);
    }
    return cb(null, data);
  });
}

function relationList(data, userId, cb) {
  httpUtil.httpRequest(config.app.connection, config.methods.GET, '/user/relation/list/userId/'+userId, data, function (err, data) {
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
exports.contactLoad = contactLoad;
exports.contactUpdate = contactUpdate;
exports.contactDelete = contactDelete;
exports.addressCreate = addressCreate;
exports.addressList = addressList;
exports.addressLoad = addressLoad;
exports.addressUpdate = addressUpdate;
exports.addressDelete = addressDelete;
exports.relationCreate = relationCreate;
exports.relationList = relationList;
exports.init = init;
