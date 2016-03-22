'use strict';
require('pmx').init({
  http : true
});

var https = require('http');
var querystring = require('querystring');
var req = require('superagent');
var config = require('../config/index');



exports.httpRequest = function(opt, method, path, bodyRequest, cb) {
  var contentType = '';
  if ((typeof(bodyRequest) == 'object') && (bodyRequest != null)) {
    contentType = 'application/json';
    bodyRequest = JSON.stringify(bodyRequest);
  } else {
    contentType = 'application/x-www-form-urlencoded';
    bodyRequest = querystring.stringify(bodyRequest);
  }
  var options = {
    urlPrefix: opt.urlPrefix ? opt.urlPrefix : '',
    isHttps: opt.isHttps,
    host: opt.host,
    port: opt.port,
    method: method,
    path: opt.urlPrefix ? opt.urlPrefix + path : path,
    headers: {
      'Authorization': opt.token,
      'Content-Length': bodyRequest.length,
      'Content-Type': contentType
    }
  };

  if (options.isHttps) {
    https = require('https');
  }

  var body = "";
  var request = https.request(options, function(res) {
    res.on('data', function(data) {
      //console.log('http util data 0',data);
      body += data;
    });
    res.on('end', function() {
      var pbody = {};
      if (body !== "") {
        try {
          //console.log('http util body 1',body);
          pbody = JSON.parse(body);

        } catch (e) {
          pbody = {};
        }
      }
      return cb(null, {
        status: res.statusCode,
        body: pbody
      });
    });
    res.on('error', function(e) {
      return cb(e, null);
    });
  });
  request.write(bodyRequest);
  request.end();
};

exports.request = function(opt, method, path, bodyRequest, cb){

  var contentType = '';
  if ((typeof(bodyRequest) == 'object') && (bodyRequest != null)) {
    contentType = 'application/json';
  } else {
    contentType = 'application/x-www-form-urlencoded';
  }

  var url = opt.isHttps ? "https://" : "http://";
  url = url + opt.host;
  url = url + ":"+opt.port;
  url = url + opt.urlPrefix || '';
  url = url + path || '';

  var request = req(method , url)
    .set('Authorization', opt.token)
    .set('Content-Type', contentType);

  if(method === 'GET'){
    request.query(bodyRequest);
  }else{
    request.send(bodyRequest);
  }

  request.on('error', function(error){
    return cb(error);
  })

  request.end(function(err, res){
    if(err){
      return cb(err);
    }
    cb(err, res)
  });

}