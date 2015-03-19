'use strict';

var httpUtil = require('../http/http.util');
var config = require('../config/index');
var urlencode = require('urlencode');

function init(connection) {
    config.app.connection = connection;
}

function loanSimulate(data, cb) {
  httpUtil.httpRequest(config.app.connection, config.methods.POST, '/loan/simulate', data, function (err, data) {
    if (err) {
      return cb(err);
    }
    if (data.status !== 200) {
      return cb(data.body);
    }
    return cb(null, data.body);
  });
}

function getLoan(loanId, cb) {
  httpUtil.httpRequest(config.app.connection, config.methods.GET, '/loan/find/loanId/'+loanId, null, function (err, data) {
    if (err) {
      return cb(err);
    }
    if (data.status !== 200) {
      return cb(data.body);
    }
    return cb(null, data.body);
  });
}

function loanApplicationCreate(data, cb) {
  httpUtil.httpRequest(config.app.connection, config.methods.POST, '/loan/application/create', data, function (err, data) {
    if (err) {
      return cb(err);
    }
    if (data.status !== 200) {
      return cb(data.body);
    }
    return cb(null, data.body);
  });
}

function loanApplicationState(data, cb) {
  httpUtil.httpRequest(config.app.connection, config.methods.POST, '/loan/application/state', data, function (err, data) {
    if (err) {
      return cb(err);
    }
    if (data.status !== 200) {
      return cb(data.body);
    }
    return cb(null, data.body);
  });
}

function loanApplicationSign(data, cb) {
  httpUtil.httpRequest(config.app.connection, config.methods.POST, '/loan/application/sign', data, function (err, data) {
    if (err) {
      return cb(err);
    }
    if (data.status !== 200) {
      return cb(data.body);
    }
    return cb(null, data.body);
  });
}

function loanApplicationPayment(data, cb) {
  httpUtil.httpRequest(config.app.connection, config.methods.POST, '/loan/application/payment', data, function (err, data) {
    if (err) {
      return cb(err);
    }
    if (data.status !== 200) {
      return cb(data.body);
    }
    return cb(null, data.body);
  });
}

function loanApplicationSimulate(data, cb) {
    httpUtil.httpRequest(config.app.connection, config.methods.POST, '/loan/application/simulate', data, function (err, data) {
        if (err) {
            return cb(err);
        }
        if (data.status !== 200) {
            return cb(data.body);
        }
        return cb(null, data.body);
    });
}

function loanApplicationContract(data, cb) {
  httpUtil.httpRequest(config.app.connection, config.methods.POST, '/loan/application/contract', data, function (err, data) {
    if (err) {
      return cb(err);
    }
    if (data.status !== 200) {
      return cb(data.body);
    }
    return cb(null, data.body);
  });
}

function loanApplicationFind(applicationId, cb) {
  httpUtil.httpRequest(config.app.connection, config.methods.GET, '/loan/application/find/applicationId/'+urlencode(applicationId), null, function (err, data) {
    if (err) {
      return cb(err);
    }
    if (data.status !== 200) {
      return cb(data.body);
    }
    return cb(null, data.body);
  });
}

module.exports = {
  init : init,
  loanSimulate : loanSimulate,
  getLoan : getLoan,
  loanApplicationCreate : loanApplicationCreate,
  loanApplicationState : loanApplicationState,
  loanApplicationSign : loanApplicationSign,
  loanApplicationPayment : loanApplicationPayment,
  loanApplicationSimulate : loanApplicationSimulate,
  loanApplicationContract : loanApplicationContract,
  loanApplicationFind : loanApplicationFind
}

