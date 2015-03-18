'use strict';

var httpUtil = require('../http/http.util');
var config = require('../config/index');
var urlencode = require('urlencode');

function init(connection) {
    config.app.connection = connection;
}

function applicationSimulate(data, cb) {
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

exports.init = init;
exports.applicationSimulate = applicationSimulate;

