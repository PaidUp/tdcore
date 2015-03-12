/**
 * Created by riclara on 3/2/15.
 */
'use strict';

var httpUtil = require('../http/http.util');
var config = require('../config/index');

exports.createCustomer = function (data, token, cb) {
    httpUtil.httpRequest(config.payment.connection, config.methods.POST, data, '/customer/create', token, function (err, data) {
        if (err) {
            return cb(err);
        }
        return cb(null, data);
    });
};

exports.createCard = function (data, token, cb) {
    httpUtil.httpRequest(config.payment.connection, config.methods.POST, data, '/card/create', token, function (err, data) {
        if (err) {
            return cb(err);
        }
        return cb(null, data);
    });
};

exports.associateCard = function (data, token, cb) {
    httpUtil.httpRequest(config.payment.connection, config.methods.POST, data, '/card/associate', token, function (err, data) {
        if (err) {
            return cb(err);
        }
        return cb(null, data);
    });
};

exports.createBank = function (data, token, cb) {
    httpUtil.httpRequest(config.payment.connection, config.methods.POST, data, '/bank/create', token, function (err, data) {
        if (err) {
            return cb(err);
        }
        return cb(null, data);
    });
};

exports.associateBank = function (data, token, cb) {
    httpUtil.httpRequest(config.payment.connection, config.methods.POST, data, '/bank/associate', token, function (err, data) {
        if (err) {
            return cb(err);
        }
        return cb(null, data);
    });
};

exports.createOrder = function (data, token, cb) {
    httpUtil.httpRequest(config.payment.connection, config.methods.POST, data, '/order/create', token, function (err, data) {
        if (err) {
            return cb(err);
        }
        return cb(null, data);
    });
};

exports.debitCard = function (data, token, cb) {
    httpUtil.httpRequest(config.payment.connection, config.methods.POST, data, '/card/debit', token, function (err, data) {
        if (err) {
            return cb(err);
        }
        return cb(null, data);
    });
};

exports.debitBank = function (data, token, cb) {
    httpUtil.httpRequest(config.payment.connection, config.methods.POST, data, '/bank/debit', token, function (err, data) {
        if (err) {
            return cb(err);
        }
        return cb(null, data);
    });
};

exports.listCustomerBanks = function (customerId, token, cb) {
    httpUtil.httpRequest(config.payment.connection, config.methods.GET, null, '/bank/list/customerId/'+customerId, token, function (err, data) {
        if (err) {
            return cb(err);
        }
        return cb(null, data);
    });
};

exports.listCards = function (customerId, token, cb) {
    httpUtil.httpRequest(config.payment.connection, config.methods.GET, null, '/card/list/customerId/'+customerId, token, function (err, data) {
        if (err) {
            return cb(err);
        }
        return cb(null, data);
    });
};

exports.createBankVerification = function (data, token, cb) {
    httpUtil.httpRequest(config.payment.connection, config.methods.POST, data, '/bank/create/verification', token, function (err, data) {
        if (err) {
            return cb(err);
        }
        return cb(null, data);
    });
};

exports.loadBankVerification = function (verificationId, token, cb) {
    httpUtil.httpRequest(config.payment.connection, config.methods.GET, null, '/bank/load/verification/verificationId/'+verificationId, token, function (err, data) {
        if (err) {
            return cb(err);
        }
        return cb(null, data);
    });
};

exports.deleteBankAccount = function (data, token, cb) {
    httpUtil.httpRequest(config.payment.connection, config.methods.DELETE, data, '/bank/delete', token, function (err, data) {
        if (err) {
            return cb(err);
        }
        return cb(null, data);
    });
};

exports.confirmBankVerification = function (data, token, cb) {
    httpUtil.httpRequest(config.payment.connection, config.methods.POST, data, '/bank/confirm/verification', token, function (err, data) {
        if (err) {
            return cb(err);
        }
        return cb(null, data);
    });
};

exports.updateOrderDescription = function (data, token, cb) {
    httpUtil.httpRequest(config.payment.connection, config.methods.POST, data, '/order/update/description', token, function (err, data) {
        if (err) {
            return cb(err);
        }
        return cb(null, data);
    });
};

exports.prepareCard = function (data, token, cb) {
    httpUtil.httpRequest(config.payment.connection, config.methods.POST, data, '/card/prepare', token, function (err, data) {
        if (err) {
            return cb(err);
        }
        return cb(null, data);
    });
};

exports.prepareBank = function (data, token, cb) {
    httpUtil.httpRequest(config.payment.connection, config.methods.POST, data, '/bank/prepare', token, function (err, data) {
        if (err) {
            return cb(err);
        }
        return cb(null, data);
    });
};

exports.fetchBank = function (bankId, token, cb) {
    httpUtil.httpRequest(config.payment.connection, config.methods.GET, null, '/bank/fetch/bankId/'+bankId, token, function (err, data) {
        if (err) {
            return cb(err);
        }
        return cb(null, data);
    });
};





exports.fetchCard = function (cardId, token, cb) {
    httpUtil.httpRequest(config.payment.connection, config.methods.GET, null, '/card/fetch/cardId/'+cardId, token, function (err, data) {
        if (err) {
            return cb(err);
        }
        return cb(null, data);
    });
};

exports.fetchDebit = function (debitId, token, cb) {
    httpUtil.httpRequest(config.payment.connection, config.methods.GET, null, '/order/debit/debitId/'+debitId, token, function (err, data) {
        if (err) {
            return cb(err);
        }
        return cb(null, data);
    });
};

exports.getUserDefaultBankId = function (customerId, token, cb) {
    httpUtil.httpRequest(config.payment.connection, config.methods.GET, null, '/bank/default/customerId/'+customerId, token, function (err, data) {
        if (err) {
            return cb(err);
        }
        return cb(null, data);
    });
};

exports.getUserDefaultCardId = function (customerId, token, cb) {
    httpUtil.httpRequest(config.payment.connection, config.methods.GET, null, '/card/default/customerId/'+customerId, token, function (err, data) {
        if (err) {
            return cb(err);
        }
        return cb(null, data);
    });
};




