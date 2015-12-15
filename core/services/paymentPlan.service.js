'user strict'

var httpUtil = require('../http/http.util');
var config = require('../config/index');

var conn = {};

exports.init = function(connection) {
  conn = connection;
}

exports.paymentPlanCreate = function(params, cb) {
  httpUtil.request(conn, config.methods.POST, '/paymentplan/create', params, function (err, data) {
    if (err) {
      return cb(err.response.body);
    }
    if (data.status !== 200) {
      return cb(data.body);
    }
    return cb(null, data.body);
  });
}

exports.paymentPlanCreateFull = function(params, cb) {
  httpUtil.request(conn, config.methods.POST, '/paymentplan/create/full', params, function (err, data) {
    if (err) {
      return cb(err.response.body);
    }
    if (data.status !== 200) {
      return cb(data.body);
    }
    return cb(null, data.body);
  });
}

exports.paymentPlanUpdate = function(params, cb) {
  httpUtil.request(conn, config.methods.PUT, '/paymentplan/update', params, function (err, data) {
    if (err) {
      return cb(err);
    }
    if (data.status !== 200) {
      return cb(data.body);
    }
    return cb(null, data.body);
  });
}

exports.paymentPlanInfo = function(paymentplanid, cb) {
  httpUtil.request(conn, config.methods.GET, '/paymentplan/info/'+paymentplanid, {}, function (err, data) {
    if (err) {
      return cb(err.response.body);
    }
    if (data.status !== 200) {
      return cb(data.body);
    }
    return cb(null, data.body);
  });
}

exports.paymentPlanInfoFull = function(paymentplanid, cb) {
  httpUtil.request(conn, config.methods.GET, '/paymentplan/info/full/'+paymentplanid, {}, function (err, data) {
    if (err) {
      return cb(err.response.body);
    }
    if (data.status !== 200) {
      return cb(data.body);
    }
    return cb(null, data.body);
  });
}

exports.paymentPlanList = function(params, cb) {
  httpUtil.request(conn, config.methods.POST, '/paymentplan/list', params, function (err, data) {
    if (err) {
      return cb(err.response.body);
    }
    if (data.status !== 200) {
      return cb(data.body);
    }
    return cb(null, data.body);
  });
}

exports.paymentPlanDelete = function(paymentplanid, cb) {
  httpUtil.request(conn, config.methods.DELETE, '/paymentplan/delete/'+paymentplanid, {}, function (err, data) {
    if (err) {
      return cb(err.response.body);
    }
    if (data.status !== 200) {
      return cb(data.body);
    }
    return cb(null, data.body);
  });
}