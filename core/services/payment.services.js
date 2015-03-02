/**
 * Created by riclara on 3/2/15.
 */
'use strict';

var httpUtil = require('../http/http.util');
var config = require('../config/index');

exports.createCustomer = function (data, token, cb) {
    httpUtil.httpRequest(config.payment.connection, config.methods.POST, data, '/api/v1/payment/createCustomer', token, function (err, data) {
        if (err) {
            return cb(err);
        }
        return cb(null, data);
    });
};

exports.createCard = function (data, cb) {
    httpUtil.httpRequest(config.payment.connection, config.methods.POST, body, '/api/v1/payment/createCard', token, function (err, data) {
        if (err) {
            return cb(err);
        }
        return cb(null, data);
    });
};

exports.associateCard = function (data, cb) {
    httpUtil.httpRequest(config.payment.connection, config.methods.POST, body, '/api/v1/payment/associateCard', token, function (err, data) {
        if (err) {
            return cb(err);
        }
        return cb(null, data);
    });
};

exports.createBank = function (data, cb) {
    httpUtil.httpRequest(config.payment.connection, config.methods.POST, body, '/api/v1/payment/createBank', token, function (err, data) {
        if (err) {
            return cb(err);
        }
        return cb(null, data);
    });
};

exports.associateBank = function (data, cb) {
    httpUtil.httpRequest(config.payment.connection, config.methods.POST, body, '/api/v1/payment/associateBank', token, function (err, data) {
        if (err) {
            return cb(err);
        }
        return cb(null, data);
    });
};

exports.createOrder = function (data, cb) {
    httpUtil.httpRequest(config.payment.connection, config.methods.POST, body, '/api/v1/payment/createOrder', token, function (err, data) {
        if (err) {
            return cb(err);
        }
        return cb(null, data);
    });
};

exports.debitCard = function (data, cb) {
    httpUtil.httpRequest(config.payment.connection, config.methods.POST, body, '/api/v1/payment/debitCard', token, function (err, data) {
        if (err) {
            return cb(err);
        }
        return cb(null, data);
    });
};

exports.debitBank = function (data, cb) {
    httpUtil.httpRequest(config.payment.connection, config.methods.POST, body, '/api/v1/payment/debitBank', token, function (err, data) {
        if (err) {
            return cb(err);
        }
        return cb(null, data);
    });
};

exports.listCustomerBanks = function (data, cb) {
    httpUtil.httpRequest(config.payment.connection, config.methods.GET, body, '/api/v1/payment/listCustomerBanks', token, function (err, data) {
        if (err) {
            return cb(err);
        }
        return cb(null, data);
    });
};

exports.listCards = function (data, cb) {
    httpUtil.httpRequest(config.payment.connection, config.methods.GET, body, '/api/v1/payment/listCards', token, function (err, data) {
        if (err) {
            return cb(err);
        }
        return cb(null, data);
    });
};

exports.createBankVerification = function (data, cb) {
    httpUtil.httpRequest(config.payment.connection, config.methods.POST, body, '/api/v1/payment/createBankVerification', token, function (err, data) {
        if (err) {
            return cb(err);
        }
        return cb(null, data);
    });
};

exports.loadBankVerification = function (data, cb) {
    httpUtil.httpRequest(config.payment.connection, config.methods.POST, body, '/api/v1/payment/loadBankVerification', token, function (err, data) {
        if (err) {
            return cb(err);
        }
        return cb(null, data);
    });
};

exports.deleteBankAccount = function (data, cb) {
    httpUtil.httpRequest(config.payment.connection, config.methods.DELETE, body, '/api/v1/payment/deleteBankAccount', token, function (err, data) {
        if (err) {
            return cb(err);
        }
        return cb(null, data);
    });
};

exports.confirmBankVerification = function (data, cb) {
    httpUtil.httpRequest(config.payment.connection, config.methods.POST, body, '/api/v1/payment/confirmBankVerification', token, function (err, data) {
        if (err) {
            return cb(err);
        }
        return cb(null, data);
    });
};

exports.updateOrderDescription = function (data, cb) {
    httpUtil.httpRequest(config.payment.connection, config.methods.POST, body, '/api/v1/payment/updateOrderDescription', token, function (err, data) {
        if (err) {
            return cb(err);
        }
        return cb(null, data);
    });
};

exports.listBanks = function (data, cb) {
    httpUtil.httpRequest(config.payment.connection, config.methods.GET, body, '/api/v1/payment/listBanks', token, function (err, data) {
        if (err) {
            return cb(err);
        }
        return cb(null, data);
    });
};

exports.prepareCard = function (data, cb) {
    httpUtil.httpRequest(config.payment.connection, config.methods.POST, body, '/api/v1/payment/prepareCard', token, function (err, data) {
        if (err) {
            return cb(err);
        }
        return cb(null, data);
    });
};

exports.prepareBank = function (data, cb) {
    httpUtil.httpRequest(config.payment.connection, config.methods.POST, body, '/api/v1/payment/prepareBank', token, function (err, data) {
        if (err) {
            return cb(err);
        }
        return cb(null, data);
    });
};

exports.fetchBank = function (data, cb) {
    httpUtil.httpRequest(config.payment.connection, config.methods.GET, body, '/api/v1/payment/fetchBank', token, function (err, data) {
        if (err) {
            return cb(err);
        }
        return cb(null, data);
    });
};

exports.fetchCard = function (data, cb) {
    httpUtil.httpRequest(config.payment.connection, config.methods.GET, body, '/api/v1/payment/fetchCard', token, function (err, data) {
        if (err) {
            return cb(err);
        }
        return cb(null, data);
    });
};

exports.getUserDefaultBankId = function (data, cb) {
    httpUtil.httpRequest(config.payment.connection, config.methods.GET, body, '/api/v1/payment/getUserDefaultBankId', token, function (err, data) {
        if (err) {
            return cb(err);
        }
        return cb(null, data);
    });
};

exports.getUserDefaultCardId = function (data, cb) {
    httpUtil.httpRequest(config.payment.connection, config.methods.GET, body, '/api/v1/payment/getUserDefaultCardId', token, function (err, data) {
        if (err) {
            return cb(err);
        }
        return cb(null, data);
    });
};




