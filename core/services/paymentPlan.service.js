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


function paymentPlanInfoFullByName (name, isParce, cb) {

  paymentPlanList({name : name}, function(err ,data){
    if(err){
      return cb(err);
    }
    if(!data || data.length === 0){
      return cb(null , {})
    }
    entityId =data.pop().entityId;

    paymentPlanInfoFull(entityId, function(errInfo , dataInfo){
      if(errInfo){
        return cb(errInfo);
      }

      cb(null , isParce ? parsePaymentPlan(dataInfo) : dataInfo);
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

function parsePaymentPlan(response){
  var schedule = {destinationId : response.destination,
    schedulePeriods : [],
    meta : {}
  };

  response.schedules.forEach(function (ele, idx, arr){
    var schedulePeriod = {};
    schedulePeriod.entityId = ele.entityId;
    ele.informations.forEach(function(eleInfo, idxInfo, arrInfo){
      schedulePeriod[eleInfo.name] = eleInfo.value
    });
    schedule.schedulePeriods.push(schedulePeriod);
  });

  response.metadatas.forEach(function (ele, idx, arr){
    schedule.meta[ele.name] = ele.value;
  });

  return schedule;
}

function scheduleInformationUpdate (params, cb) {
  httpUtil.request(conn, config.methods.PUT, '/paymentplan/schedule/information/update', params, function (err, data) {
    if (err) {
      return cb(err.response.body);
    }
    if (data.status !== 200) {
      return cb(data.body);
    }
    return cb(null, data.body);
  });
}

function scheduleInformationCreate (params, cb) {
  httpUtil.request(conn, config.methods.POST, '/paymentplan/schedule/information/create', params, function (err, data) {
    if (err) {
      return cb(err.response.body);
    }
    if (data.status !== 200) {
      return cb(data.body);
    }
    return cb(null, data.body);
  });
}

function scheduleInformationDelete(paymentPlanId, cb) {
  httpUtil.request(conn, config.methods.DELETE, '/paymentplan/schedule/information/delete/'+paymentPlanId, {}, function (err, data) {
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
  paymentPlanDelete : paymentPlanDelete,
  scheduleInformationUpdate:scheduleInformationUpdate,
    scheduleInformationCreate:scheduleInformationCreate
}