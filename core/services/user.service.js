'use strict';

var httpUtil = require('../http/http.util');
var config = require('../config/index');

function create(data, token, cb) {

  httpUtil.httpRequest(config.user.connection, config.methods.POST, data, '/user/create', token, function (err, data) {
    if (err) {
      return cb(err);
    }
    return cb(null, data);
  });
}

function current(data, token, tokenUser, cb) {
  httpUtil.httpRequest(config.user.connection, config.methods.GET, data, '/user/current/?token='+tokenUser, token, function (err, data) {
    if (err) {
      return cb(err);
    }
    return cb(null, data);
  });
}

function update(data, token, userId, cb) {
  httpUtil.httpRequest(config.user.connection, config.methods.POST, data, '/user/update/userId/'+userId, token, function (err, data) {
    if (err) {
      return cb(err);
    }
    return cb(null, data);
  });
}

function find(data, token, userId, cb) {
  httpUtil.httpRequest(config.user.connection, config.methods.POST, data, '/user/find', token, function (err, data) {
    if (err) {
      return cb(err);
    }
    return cb(null, data);
  });
}

function contactCreate(data, token, userId, cb) {
  httpUtil.httpRequest(config.user.connection, config.methods.POST, data, '/user/contact/create/userId/'+userId, token, function (err, data) {
    if (err) {
      return cb(err);
    }
    return cb(null, data);
  });
}

function contactList(data, token, userId, cb) {
  httpUtil.httpRequest(config.user.connection, config.methods.POST, data, '/user/contact/list/userId/'+userId, token, function (err, data) {
    if (err) {
      return cb(err);
    }
    return cb(null, data);
  });
}

function contactLoad(data, token, userId, contactId, cb) {
  httpUtil.httpRequest(config.user.connection, config.methods.GET, data, '/user/contact/load/userId/'+userId+'/contactId/'+contactId, token, function (err, data) {
    if (err) {
      return cb(err);
    }
    return cb(null, data);
  });
}

function contactUpdate(data, token, userId, contactId, cb) {
  httpUtil.httpRequest(config.user.connection, config.methods.PUT, data, '/user/contact/update/userId/'+userId+'/contactId/'+contactId, token, function (err, data) {
    if (err) {
      return cb(err);
    }
    return cb(null, data);
  });
}

function contactDelete(data, token, userId, contactId, cb) {
  httpUtil.httpRequest(config.user.connection, config.methods.DELETE, data, '/user/contact/delete/userId/'+userId+'/contactId/'+contactId, token, function (err, data) {
    if (err) {
      return cb(err);
    }
    return cb(null, data);
  });
}

function addressCreate(data, token, userId, cb) {
  httpUtil.httpRequest(config.user.connection, config.methods.POST, data, '/user/address/create/userId/'+userId, token, function (err, data) {
    if (err) {
      return cb(err);
    }
    return cb(null, data);
  });
}

function addressList(data, token, userId, cb) {
  httpUtil.httpRequest(config.user.connection, config.methods.POST, data, '/user/address/list/userId/'+userId, token, function (err, data) {
    if (err) {
      return cb(err);
    }
    return cb(null, data);
  });
}

function addressLoad(data, token, userId, addressId, cb) {
  httpUtil.httpRequest(config.user.connection, config.methods.GET, data, '/user/address/load/userId/'+userId+'/addressId/'+addressId, token, function (err, data) {
    if (err) {
      return cb(err);
    }
    return cb(null, data);
  });
}

function addressUpdate(data, token, userId, addressId, cb) {
  httpUtil.httpRequest(config.user.connection, config.methods.PUT, data, '/user/address/update/userId/'+userId+'/addressId/'+addressId, token, function (err, data) {
    if (err) {
      return cb(err);
    }
    return cb(null, data);
  });
}

function addressDelete(data, token, userId, addressId, cb) {
  httpUtil.httpRequest(config.user.connection, config.methods.DELETE, data, '/user/address/delete/userId/'+userId+'/addressId/'+addressId, token, function (err, data) {
    if (err) {
      return cb(err);
    }
    return cb(null, data);
  });
}

function relationCreate(data, token, cb) {
  httpUtil.httpRequest(config.user.connection, config.methods.POST, data, '/user/relation/create', token, function (err, data) {
    if (err) {
      return cb(err);
    }
    return cb(null, data);
  });
}

function relationList(data, token, userId, cb) {
  httpUtil.httpRequest(config.user.connection, config.methods.GET, data, '/user/relation/list/userId/'+userId, token, function (err, data) {
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
