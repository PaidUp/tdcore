'user strict'

var httpUtil = require('../http/http.util');
var config = require('../config/index');

var conn = {};

function init (connection) {
  conn = connection;
}

function paymentPlanCreate (params, cb) {
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

function paymentPlanCreateFull (params, cb) {
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

function paymentPlanUpdate(params, cb) {
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

function paymentPlanInfo (paymentplanid, cb) {
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

function paymentPlanInfoFull (paymentplanid, cb) {
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


function paymentPlanInfoFullByName (name, cb) {

  paymentPlanList({name : name}, function(err ,data){
    if(err){
      return cb(err);
    }
    entityId =data.pop().entityId;

    paymentPlanInfoFull(entityId, function(errInfo , dataInfo){
      if(errInfo){
        return cb(errInfo);
      }
      cb(null , dataInfo);
    });
  });


}

function paymentPlanList (params, cb) {
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

function paymentPlanDelete (paymentplanid, cb) {
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

module.exports = {
  init : init,
  paymentPlanCreate : paymentPlanCreate,
  paymentPlanCreateFull : paymentPlanCreateFull,
  paymentPlanUpdate : paymentPlanUpdate,
  paymentPlanInfo : paymentPlanInfo,
  paymentPlanInfoFull : paymentPlanInfoFull,
  paymentPlanInfoFullByName : paymentPlanInfoFullByName,
  paymentPlanList : paymentPlanList,
  paymentPlanDelete : paymentPlanDelete
}