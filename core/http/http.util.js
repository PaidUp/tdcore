'use strict';

var https = require('http');
var querystring = require('querystring');

exports.httpRequest = function (opt, method, path, bodyRequest, cb) {
  bodyRequest = querystring.stringify(bodyRequest);
  var options = {
    urlPrefix : opt.urlPrefix ? opt.urlPrefix : '',
    isHttps: opt.isHttps,
    host: opt.url,
    port: opt.port,
    method: method,
    path: opt.urlPrefix ? opt.urlPrefix+path : path,
    headers: {
      'Authorization': opt.token,
      'Content-Length': bodyRequest.length,
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  };

  if (options.isHttps) {
    https = require('https');
  }

  var body = "";
  var request = https.request(options, function (res) {
    res.on('data', function (data) {
      body += data;
    });
    res.on('end', function () {
      var pbody = {};
      if (body !== "") {
        try {
          pbody = JSON.parse(body);
        }catch(e){
          pbody = {};
        }
      }
      return cb(null, pbody);
    });
    res.on('error', function (e) {
      return cb(e, null);
    });
  });
  request.write(bodyRequest);
  request.end();
};