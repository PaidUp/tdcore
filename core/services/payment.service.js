/**
 * Created by riclara on 3/2/15.
 */
'use strict';

var httpUtil = require('../http/http.util');
var config = require('../config/index');

exports.init = function(connection){
  config.app.connection = connection;
}

exports.createCustomer = function (data, cb) {
  httpUtil.httpRequest(config.app.connection, config.methods.POST, '/customer/create', data, function (err, data) {
    if (err) {
      return cb(err);
    }
    if(data.code && data.code.indexOf('Error') !== -1){
      return cb(data);
    }
    return cb(null, data);
  });
};

exports.createCard = function (data, cb) {
  httpUtil.httpRequest(config.app.connection, config.methods.POST, '/card/create', data, function (err, data) {
    if (err) {
      return cb(err);
    }
    if(data.code && data.code.indexOf('Error') !== -1){
      return cb(data);
    }
    return cb(null, data);
  });
};

exports.associateCard = function (data, cb) {
  httpUtil.httpRequest(config.app.connection, config.methods.POST, '/card/associate', data, function (err, data) {
    if (err) {
      return cb(err);
    }
    if(data.code && data.code.indexOf('Error') !== -1){
      return cb(data);
    }
    return cb(null, data);
  });
};

exports.createBank = function (data, cb) {
  httpUtil.httpRequest(config.app.connection, config.methods.POST, '/bank/create', data, function (err, data) {
    if (err) {
      return cb(err);
    }
    if(data.code && data.code.indexOf('Error') !== -1){
      return cb(data);
    }
    return cb(null, data);
  });
};

exports.associateBank = function (data, cb) {
  httpUtil.httpRequest(config.app.connection, config.methods.POST, '/bank/associate', data, function (err, data) {
    if (err) {
      return cb(err);
    }
    if(data.code && data.code.indexOf('Error') !== -1){
      return cb(data);
    }
    return cb(null, data);
  });
};

exports.createOrder = function (data, cb) {
  httpUtil.httpRequest(config.app.connection, config.methods.POST, '/order/create', data, function (err, data) {
    if (err) {
      return cb(err);
    }
    if(data.code && data.code.indexOf('Error') !== -1){
      return cb(data);
    }
    return cb(null, data);
  });
};

exports.debitCard = function (data, cb) {
  httpUtil.httpRequest(config.app.connection, config.methods.POST, '/card/debit', data, function (err, data) {
    if (err) {
      return cb(err);
    }
    if(data.code && data.code.indexOf('Error') !== -1){
      return cb(data);
    }
    return cb(null, data);
  });
};

exports.debitBank = function (data, cb) {
  httpUtil.httpRequest(config.app.connection, config.methods.POST, '/bank/debit', data, function (err, data) {
    if (err) {
      return cb(err);
    }
    if(data.code && data.code.indexOf('Error') !== -1){
      return cb(data);
    }
    return cb(null, data);
  });
};

exports.listCustomerBanks = function (customerId, cb) {
  httpUtil.httpRequest(config.app.connection, config.methods.GET, '/bank/list/customerId/'+customerId, null, function (err, data) {
    if (err) {
      return cb(err);
    }
    if(data.code && data.code.indexOf('Error') !== -1){
      return cb(data);
    }
    return cb(null, data);
  });
};

exports.listCards = function (customerId, cb) {
  httpUtil.httpRequest(config.app.connection, config.methods.GET, '/card/list/customerId/'+customerId, null, function (err, data) {
    if (err) {
      return cb(err);
    }
    if(data.code && data.code.indexOf('Error') !== -1){
      return cb(data);
    }
    return cb(null, data);
  });
};

exports.createBankVerification = function (data, cb) {
  httpUtil.httpRequest(config.app.connection, config.methods.POST, '/bank/create/verification', data, function (err, data) {
    if (err) {
      return cb(err);
    }
    if(data.code && data.code.indexOf('Error') !== -1){
      return cb(data);
    }
    return cb(null, data);
  });
};

exports.loadBankVerification = function (verificationId, cb) {
  httpUtil.httpRequest(config.app.connection, config.methods.GET, '/bank/load/verification/verificationId/'+verificationId, null, function (err, data) {
    if (err) {
      return cb(err);
    }
    if(data.code && data.code.indexOf('Error') !== -1){
      return cb(data);
    }
    return cb(null, data);
  });
};

exports.deleteBankAccount = function (data, cb) {
  httpUtil.httpRequest(config.app.connection, config.methods.DELETE, '/bank/delete', data, function (err, data) {
    if (err) {
      return cb(err);
    }
    if(data.code && data.code.indexOf('Error') !== -1){
      return cb(data);
    }
    return cb(null, data);
  });
};

exports.confirmBankVerification = function (data, cb) {
  httpUtil.httpRequest(config.app.connection, config.methods.POST, '/bank/confirm/verification', data, function (err, data) {
    if (err) {
      return cb(err);
    }
    if(data.code && data.code.indexOf('Error') !== -1){
      return cb(data);
    }
    return cb(null, data);
  });
};

exports.updateOrderDescription = function (data, cb) {
  httpUtil.httpRequest(config.app.connection, config.methods.POST, '/order/update/description', data, function (err, data) {
    if (err) {
      return cb(err);
    }
    if(data.code && data.code.indexOf('Error') !== -1){
      return cb(data);
    }
    return cb(null, data);
  });
};

exports.prepareCard = function (data, cb) {
  httpUtil.httpRequest(config.app.connection, config.methods.POST, '/card/prepare', data, function (err, data) {
    if (err) {
      return cb(err);
    }
    if(data.code && data.code.indexOf('Error') !== -1){
      return cb(data);
    }
    return cb(null, data);
  });
};

exports.prepareBank = function (data, cb) {
  httpUtil.httpRequest(config.app.connection, config.methods.POST, '/bank/prepare', data, function (err, data) {
    if (err) {
      return cb(err);
    }
    if(data.code && data.code.indexOf('Error') !== -1){
      return cb(data);
    }
    return cb(null, data);
  });
};

exports.fetchBank = function (bankId, cb) {
  httpUtil.httpRequest(config.app.connection, config.methods.GET, '/bank/fetch/bankId/'+bankId, null, function (err, data) {
    if (err) {
      return cb(err);
    }
    if(data.code && data.code.indexOf('Error') !== -1){
      return cb(data);
    }
    return cb(null, data);
  });
};





exports.fetchCard = function (cardId, cb) {
  httpUtil.httpRequest(config.app.connection, config.methods.GET, '/card/fetch/cardId/'+cardId, null, function (err, data) {
    if (err) {
      return cb(err);
    }
    return cb(null, data);
  });
};

exports.fetchDebit = function (debitId, cb) {
  httpUtil.httpRequest(config.app.connection, config.methods.GET, '/order/debit/debitId/'+debitId, null, function (err, data) {
    if (err) {
      return cb(err);
    }
    return cb(null, data);
  });
};

exports.getUserDefaultBankId = function (customerId, cb) {
  httpUtil.httpRequest(config.app.connection, config.methods.GET, '/bank/default/customerId/'+customerId, null, function (err, data) {
    if (err) {
      return cb(err);
    }
    return cb(null, data);
  });
};

exports.getUserDefaultCardId = function (customerId, cb) {
  httpUtil.httpRequest(config.app.connection, config.methods.GET, '/card/default/customerId/'+customerId, null, function (err, data) {
    if (err) {
      return cb(err);
    }
    return cb(null, data);
  });
};




