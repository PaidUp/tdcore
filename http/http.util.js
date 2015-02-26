'use strict';

var https = require('http');
var querystring = require('querystring');

exports.httpRequest = function(opt, method, bodyRequest, path, token, cb) {
  var bodyRequest = querystring.stringify(bodyRequest);
  var options = {
      isHttps:opt.isHttps,
      host: opt.url,
      port: opt.port,
      method: method,
      path: path,
       headers: {
       'Authorization': token,
       'Accept': 'application/vnd.api+json;revision=1.1',
       'Content-Length': bodyRequest.length,
       'Content-Type': 'application/x-www-form-urlencoded'
       }
  };

  if(options.isHttps){
      https = require('https');
  }

  var body = "";
  var request = https.request(options, function(res){
    res.on('data', function(data) {
      body += data;
    });
    res.on('end', function() {
      var pbody = {};
      if(body !== ""){
        pbody = JSON.parse(body);
      }
      return cb(null, pbody);
    })
    res.on('error', function(e) {
      return (e, null);
    });
  });
  request.write(bodyRequest);
  request.end();
};
