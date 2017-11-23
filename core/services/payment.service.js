/**
 * Created by riclara on 3/2/15.
 */
'use strict'

var httpUtil = require('../http/http.util')
var config = require('../config/index')
var urlencode = require('urlencode')

exports.init = function (connection) {
  config.app.connection = connection
}

exports.createCustomer = function (data, cb) {
  httpUtil.httpRequest(config.app.connection, config.methods.POST, '/customer/create', data, function (err, data) {
    if (err) {
      return cb(err)
    }
    if (data.status !== 200) {
      return cb(data.body)
    }
    return cb(null, data.body)
  })
}

exports.fetchCustomer = function (customerId, cb) {
  httpUtil.httpRequest(config.app.connection, config.methods.GET, '/customer/fetch/' + urlencode(customerId), null, function (err, data) {
    if (err) {
      return cb(err)
    }
    if (data.status !== 200) {
      return cb(data.body)
    }
    return cb(null, data.body)
  })
}

exports.updateCustomer = function (data, cb) {
  httpUtil.httpRequest(config.app.connection, config.methods.POST, '/customer/update', data, function (err, data) {
    if (err) {
      return cb(err)
    }
    if (data.status !== 200) {
      return cb(data.body)
    }
    return cb(null, data.body)
  })
}

exports.addToSCustomer = function (data, cb) {
  httpUtil.httpRequest(config.app.connection, config.methods.POST, '/customer/add/tos', data, function (err, data) {
    if (err) {
      return cb(err)
    }
    if (data.status !== 200) {
      return cb(data.body)
    }
    return cb(null, data.body)
  })
}

exports.addLegalCustomer = function (data, cb) {
  httpUtil.httpRequest(config.app.connection, config.methods.POST, '/customer/add/legal', data, function (err, data) {
    if (err) {
      return cb(err)
    }
    if (data.status !== 200) {
      return cb(data.body)
    }
    return cb(null, data.body)
  })
}

exports.updateAccount = function (data, cb) {
  httpUtil.httpRequest(config.app.connection, config.methods.POST, '/customer/update/connect', data, function (err, data) {
    if (err) {
      return cb(err)
    }
    if (data.status !== 200) {
      return cb(data.body)
    }
    return cb(null, data.body)
  })
}

exports.createCard = function (data, cb) {
  httpUtil.httpRequest(config.app.connection, config.methods.POST, '/card/create', data, function (err, data) {
    if (err) {
      return cb(err)
    }
    if (data.status !== 200) {
      return cb(data.body)
    }
    return cb(null, data.body)
  })
}

exports.associateCard = function (data, cb) {
  httpUtil.httpRequest(config.app.connection, config.methods.POST, '/card/associate', data, function (err, data) {
    if (err) {
      return cb(err)
    }
    if (data.status !== 200) {
      return cb(data.body)
    }
    return cb(null, data.body)
  })
}

exports.createBank = function (data, cb) {
  httpUtil.httpRequest(config.app.connection, config.methods.POST, '/bank/create', data, function (err, data) {
    if (err) {
      return cb(err)
    }
    if (data.status !== 200) {
      return cb(data.body)
    }
    return cb(null, data.body)
  })
}

exports.associateBank = function (data, cb) {
  httpUtil.httpRequest(config.app.connection, config.methods.POST, '/bank/associate', data, function (err, data) {
    if (err) {
      return cb(err)
    }
    if (data.status !== 200) {
      return cb(data.body)
    }
    return cb(null, data.body)
  })
}

exports.createOrder = function (data, cb) {
  httpUtil.httpRequest(config.app.connection, config.methods.POST, '/order/create', data, function (err, data) {
    if (err) {
      return cb(err)
    }
    if (data.status !== 200) {
      return cb(data.body)
    }
    return cb(null, data.body)
  })
}

exports.debitCard = function (data, cb) {
  httpUtil.httpRequest(config.app.connection, config.methods.POST, '/card/debit', data, function (err, data) {
    if (err) {
      return cb(err)
    }
    if (data.status !== 200) {
      return cb(data.body)
    }
    return cb(null, data.body)
  })
}

exports.debitCardv2 = function (data, cb) {
  httpUtil.httpRequest(config.app.connection, config.methods.POST, '/card/debitv2', data, function (err, data) {
    if (err) {
      return cb(err)
    }
    if (data.status !== 200) {
      return cb(data.body)
    }
    return cb(null, data.body)
  })
}

exports.debitBank = function (data, cb) {
  httpUtil.httpRequest(config.app.connection, config.methods.POST, '/bank/debit', data, function (err, data) {
    if (err) {
      return cb(err)
    }
    if (data.status !== 200) {
      return cb(data.body)
    }
    return cb(null, data.body)
  })
}

exports.listCustomerBanks = function (customerId, cb) {
  httpUtil.httpRequest(config.app.connection, config.methods.GET, '/bank/list/customerId/' + urlencode(customerId), null, function (err, data) {
    if (err) {
      return cb(err)
    }
    if (data.status !== 200) {
      return cb(data.body)
    }
    return cb(null, data.body)
  })
}

exports.listCards = function (customerId, cb) {
  httpUtil.httpRequest(config.app.connection, config.methods.GET, '/card/list/customerId/' + urlencode(customerId), null, function (err, data) {
    if (err) {
      return cb(err)
    }
    if (data.status !== 200) {
      return cb(data.body)
    }
    return cb(null, data.body)
  })
}

exports.createBankVerification = function (data, cb) {
  httpUtil.httpRequest(config.app.connection, config.methods.POST, '/bank/create/verification', data, function (err, data) {
    if (err) {
      return cb(err)
    }
    if (data.status !== 200) {
      return cb(data.body)
    }
    return cb(null, data.body)
  })
}

exports.loadBankVerification = function (verificationId, cb) {
  httpUtil.httpRequest(config.app.connection, config.methods.GET, '/bank/load/verification/verificationId/' + urlencode(verificationId), null, function (err, data) {
    if (err) {
      return cb(err)
    }
    if (data.status !== 200) {
      return cb(data.body)
    }
    return cb(null, data.body)
  })
}

exports.deleteBankAccount = function (data, cb) {
  httpUtil.httpRequest(config.app.connection, config.methods.DELETE, '/bank/delete', data, function (err, data) {
    if (err) {
      return cb(err)
    }
    if (data.status !== 200) {
      return cb(data.body)
    }
    return cb(null, data.body)
  })
}

exports.deleteCardAccount = function (data, cb) {
  httpUtil.httpRequest(config.app.connection, config.methods.DELETE, `/card/customer/${data.customerId}/card/${data.cardId}`, {}, function (err, data) {
    if (err) {
      return cb(err)
    }
    if (data.status !== 200) {
      return cb(data.body)
    }
    return cb(null, data.body)
  })
}

exports.deleteBankAccount = function (data, cb) {
  httpUtil.httpRequest(config.app.connection, config.methods.DELETE, `/bank/customer/${data.customerId}/bank/${data.bankId}`, {}, function (err, data) {
    if (err) {
      return cb(err)
    }
    if (data.status !== 200) {
      return cb(data.body)
    }
    return cb(null, data.body)
  })
}

exports.confirmBankVerification = function (data, cb) {
  httpUtil.httpRequest(config.app.connection, config.methods.POST, '/bank/confirm/verification', data, function (err, data) {
    if (err) {
      return cb(err)
    }
    if (data.status !== 200) {
      return cb(data.body)
    }
    return cb(null, data.body)
  })
}

exports.updateOrderDescription = function (data, cb) {
  httpUtil.httpRequest(config.app.connection, config.methods.POST, '/order/update/description', data, function (err, data) {
    if (err) {
      return cb(err)
    }
    if (data.status !== 200) {
      return cb(data.body)
    }
    return cb(null, data.body)
  })
}

exports.prepareCard = function (data, cb) {
  httpUtil.httpRequest(config.app.connection, config.methods.POST, '/card/prepare', data, function (err, data) {
    if (err) {
      return cb(err)
    }
    if (data.status !== 200) {
      return cb(data.body)
    }
    return cb(null, data.body)
  })
}

exports.prepareBank = function (data, cb) {
  httpUtil.httpRequest(config.app.connection, config.methods.POST, '/bank/prepare', data, function (err, data) {
    if (err) {
      return cb(err)
    }
    if (data.status !== 200) {
      return cb(data.body)
    }
    return cb(null, data.body)
  })
}

exports.fetchBank = function (customerId, bankId, cb) {
  httpUtil.httpRequest(config.app.connection, config.methods.GET, '/bank/fetch/customerId/' + urlencode(customerId) + '/bankId/' + urlencode(bankId), null, function (err, data) {
    if (err) {
      return cb(err)
    }
    if (data.status !== 200) {
      return cb(data.body)
    }
    return cb(null, data.body)
  })
}

exports.fetchCard = function (customerId, cardId, cb) {
  httpUtil.httpRequest(config.app.connection, config.methods.GET, '/card/fetch/customerId/' + urlencode(customerId) + '/cardId/' + urlencode(cardId), null, function (err, data) {
    if (err) {
      return cb(err)
    }
    if (data.status !== 200) {
      return cb(data.body)
    }
    return cb(null, data.body)
  })
}

exports.fetchDebit = function (debitId, cb) {
  httpUtil.httpRequest(config.app.connection, config.methods.GET, '/order/debit/debitId/' + urlencode(debitId), null, function (err, data) {
    if (err) {
      return cb(err)
    }
    if (data.status !== 200) {
      return cb(data.body)
    }
    return cb(null, data.body)
  })
}

exports.getUserDefaultBankId = function (customerId, cb) {
  httpUtil.httpRequest(config.app.connection, config.methods.GET, '/bank/default/customerId/' + urlencode(customerId), null, function (err, data) {
    if (err) {
      return cb(err)
    }
    if (data.status !== 200) {
      return cb(data.body)
    }
    return cb(null, data.body)
  })
}

exports.getUserDefaultCardId = function (customerId, cb) {
  httpUtil.httpRequest(config.app.connection, config.methods.GET, '/card/default/customerId/' + urlencode(customerId), null, function (err, data) {
    if (err) {
      return cb(err)
    }
    if (data.status !== 200) {
      return cb(data.body)
    }
    return cb(null, data.body)
  })
}

exports.createConnectAccount = function (data, cb) {
  httpUtil.httpRequest(config.app.connection, config.methods.POST, '/customer/create/connect', data, function (err, data) {
    if (err) {
      return cb(err)
    }
    if (data.status !== 200) {
      return cb(data.body)
    }
    return cb(null, data.body)
  })
}

exports.addBankToAccount = function (data, cb) {
  httpUtil.httpRequest(config.app.connection, config.methods.POST, '/bank/create/connect', data, function (err, data) {
    if (err) {
      return cb(err)
    }
    if (data.status !== 200) {
      return cb(data.body)
    }
    return cb(null, data.body)
  })
}

exports.getTransfers = function getTransfers (stripeId, from, to, cb) {
  httpUtil.httpRequest(config.app.connection, config.methods.GET, '/transfer/' + urlencode(stripeId)+'/from/'+urlencode(from)+'/to/'+urlencode(to), null, function (err, data) {
    if (err) {
      return cb(err)
    }
    if (data.status !== 200) {
      return cb(data.body)
    }
    return cb(null, data.body)
  })
}

exports.getBalance = function getBalance (connectAccountId, transferId, cb) {
  httpUtil.httpRequest(config.app.connection, config.methods.GET, '/balance/' + urlencode(connectAccountId) + '/' + urlencode(transferId), null, function (err, data) {
    if (err) {
      return cb(err)
    }
    if (data.status !== 200) {
      return cb(data.body)
    }
    return cb(null, data.body)
  })
}

exports.retrieveAccount = function retrieveAccount (connectAccountId, cb) {
  httpUtil.httpRequest(config.app.connection, config.methods.GET, '/account/' + urlencode(connectAccountId), null, function (err, data) {
    if (err) {
      return cb(err)
    }
    if (data.status !== 200) {
      return cb(data.body)
    }
    return cb(null, data.body)
  })
}

exports.getChargesList = function getChargesList (connectAccountId, cb) {
  httpUtil.httpRequest(config.app.connection, config.methods.GET, '/charge/' + urlencode(connectAccountId), null, function (err, data) {
    if (err) {
      return cb(err)
    }
    if (data.status !== 200) {
      return cb(data.body)
    }
    return cb(null, data.body)
  })
}

exports.plaidAuthenticate = function (data, cb) {
  httpUtil.httpRequest(config.app.connection, config.methods.POST, '/plaid/authenticate', data, function (err, data) {
    if (err) {
      return cb(err)
    }
    if (data.status !== 200) {
      return cb(data.body)
    }
    return cb(null, data.body)
  })
}

exports.getDepositCharge = function (paymentId, accountId, cb) {
    let url = '/charge/payment/'+urlencode(paymentId)+'/account/'+urlencode(accountId);
    httpUtil.httpRequest(config.app.connection, config.methods.GET, url, null, function (err, data) {
        if (err) {
            return cb(err);
        }
        if (data.status !== 200) {
            return cb(data.body);
        }
        return cb(null, data.body);
    });
};

exports.getDepositChargeRefund = function (paymentId, accountId, cb) {
    let url = '/charge/payment/'+urlencode(paymentId)+'/account/'+urlencode(accountId)+'/refund';
    httpUtil.httpRequest(config.app.connection, config.methods.GET, url, null, function (err, data) {
        if (err) {
            return cb(err);
        }
        if (data.status !== 200) {
            return cb(data.body);
        }
        return cb(null, data.body);
    });
};

exports.refund = function (chargeId, reason, amount, cb) {
    let url = '/charge/refund';
    let params = {
        chargeId: chargeId,
        reason: reason
    }
    if(amount){
      params['amount'] = amount;
    }
    httpUtil.httpRequest(config.app.connection, config.methods.POST, url, params, function (err, data) {
        if (err) {
            return cb(err);
        }
        if (data.status !== 200) {
            return cb(data.body);
        }
        return cb(null, data.body);
    });
};

exports.retrieveTransfer = function (transferId, cb) {
    let url = '/transfer/retrieve/'+urlencode(transferId);
    httpUtil.httpRequest(config.app.connection, config.methods.GET, url, null, function (err, data) {
        if (err) {
            return cb(err);
        }
        if (data.status !== 200) {
            return cb(data.body);
        }
        return cb(null, data.body);
    });
};