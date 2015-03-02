/**
 * Created by riclara on 3/2/15.
 */
'use strict';

var httpUtil = require('../http/http.util');
var config = require('../config/index');

exports.createCustomer = function (data, cb) {
    httpUtil.httpRequest(config.payment.connection, config.methods.POST, data.body, '/api/v1/payment/createCustomer', data.token, function (err, data) {
        if (err) {
            return cb(err);
        }
        return cb(null, data);
    });
};

exports.createCard = function (data, cb) {
    httpUtil.httpRequest(config.payment.connection, config.methods.POST, data.body, '/api/v1/payment/createCard', data.token, function (err, data) {
        if (err) {
            return cb(err);
        }
        return cb(null, data);
    });
};

exports.associateCard = function (data, cb) {
    httpUtil.httpRequest(config.payment.connection, config.methods.POST, data.body, '/api/v1/payment/associateCard', data.token, function (err, data) {
        if (err) {
            return cb(err);
        }
        return cb(null, data);
    });
};

exports.createBank = function (data, cb) {
    httpUtil.httpRequest(config.payment.connection, config.methods.POST, data.body, '/api/v1/payment/createBank', data.token, function (err, data) {
        if (err) {
            return cb(err);
        }
        return cb(null, data);
    });
};

exports.associateBank = function (data, cb) {
    httpUtil.httpRequest(config.payment.connection, config.methods.POST, data.body, '/api/v1/payment/associateBank', data.token, function (err, data) {
        if (err) {
            return cb(err);
        }
        return cb(null, data);
    });
};

exports.createOrder = function (data, cb) {
    httpUtil.httpRequest(config.payment.connection, config.methods.POST, data.body, '/api/v1/payment/createOrder', data.token, function (err, data) {
        if (err) {
            return cb(err);
        }
        return cb(null, data);
    });
};

exports.debitCard = function (data, cb) {
    httpUtil.httpRequest(config.payment.connection, config.methods.POST, data.body, '/api/v1/payment/debitCard', data.token, function (err, data) {
        if (err) {
            return cb(err);
        }
        return cb(null, data);
    });
};

exports.debitBank = function (data, cb) {
    httpUtil.httpRequest(config.payment.connection, config.methods.POST, data.body, '/api/v1/payment/debitBank', data.token, function (err, data) {
        if (err) {
            return cb(err);
        }
        return cb(null, data);
    });
};

exports.listCustomerBanks = function (data, cb) {
    httpUtil.httpRequest(config.payment.connection, config.methods.GET, data.body, '/api/v1/payment/listCustomerBanks', data.token, function (err, data) {
        if (err) {
            return cb(err);
        }
        return cb(null, data);
    });
};

exports.listCards = function (data, cb) {
    httpUtil.httpRequest(config.payment.connection, config.methods.GET, data.body, '/api/v1/payment/listCards', data.token, function (err, data) {
        if (err) {
            return cb(err);
        }
        return cb(null, data);
    });
};

exports.createBankVerification = function (data, cb) {
    httpUtil.httpRequest(config.payment.connection, config.methods.POST, data.body, '/api/v1/payment/createBankVerification', data.token, function (err, data) {
        if (err) {
            return cb(err);
        }
        return cb(null, data);
    });
};

exports.loadBankVerification = function (data, cb) {
    httpUtil.httpRequest(config.payment.connection, config.methods.POST, data.body, '/api/v1/payment/loadBankVerification', data.token, function (err, data) {
        if (err) {
            return cb(err);
        }
        return cb(null, data);
    });
};

exports.deleteBankAccount = function (data, cb) {
    httpUtil.httpRequest(config.payment.connection, config.methods.DELETE, data.body, '/api/v1/payment/deleteBankAccount', data.token, function (err, data) {
        if (err) {
            return cb(err);
        }
        return cb(null, data);
    });
};

exports.confirmBankVerification = function (data, cb) {
    httpUtil.httpRequest(config.payment.connection, config.methods.POST, data.body, '/api/v1/payment/confirmBankVerification', data.token, function (err, data) {
        if (err) {
            return cb(err);
        }
        return cb(null, data);
    });
};

exports.updateOrderDescription = function (data, cb) {
    httpUtil.httpRequest(config.payment.connection, config.methods.POST, data.body, '/api/v1/payment/updateOrderDescription', data.token, function (err, data) {
        if (err) {
            return cb(err);
        }
        return cb(null, data);
    });
};

exports.listBanks = function (data, cb) {
    httpUtil.httpRequest(config.payment.connection, config.methods.GET, data.body, '/api/v1/payment/listBanks', data.token, function (err, data) {
        if (err) {
            return cb(err);
        }
        return cb(null, data);
    });
};

exports.prepareCard = function (data, cb) {
    httpUtil.httpRequest(config.payment.connection, config.methods.POST, data.body, '/api/v1/payment/prepareCard', data.token, function (err, data) {
        if (err) {
            return cb(err);
        }
        return cb(null, data);
    });
};

exports.prepareBank = function (data, cb) {
    httpUtil.httpRequest(config.payment.connection, config.methods.POST, data.body, '/api/v1/payment/prepareBank', data.token, function (err, data) {
        if (err) {
            return cb(err);
        }
        return cb(null, data);
    });
};

exports.fetchBank = function (data, cb) {
    httpUtil.httpRequest(config.payment.connection, config.methods.GET, data.body, '/api/v1/payment/fetchBank', data.token, function (err, data) {
        if (err) {
            return cb(err);
        }
        return cb(null, data);
    });
};

exports.fetchCard = function (data, cb) {
    httpUtil.httpRequest(config.payment.connection, config.methods.GET, data.body, '/api/v1/payment/fetchCard', data.token, function (err, data) {
        if (err) {
            return cb(err);
        }
        return cb(null, data);
    });
};

exports.getUserDefaultBankId = function (data, cb) {
    httpUtil.httpRequest(config.payment.connection, config.methods.GET, data.body, '/api/v1/payment/getUserDefaultBankId', data.token, function (err, data) {
        if (err) {
            return cb(err);
        }
        return cb(null, data);
    });
};

exports.getUserDefaultCardId = function (data, cb) {
    httpUtil.httpRequest(config.payment.connection, config.methods.GET, data.body, '/api/v1/payment/getUserDefaultCardId', data.token, function (err, data) {
        if (err) {
            return cb(err);
        }
        return cb(null, data);
    });
};




