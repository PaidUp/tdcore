'use strict';

var httpUtil = require('../http/http.util');
var config = require('../config/index');
var urlencode = require('urlencode');

function init(connection) {
    config.app.connection = connection;
}

exports.createCart = function(data, cb) {
    httpUtil.httpRequest(config.app.connection, config.methods.GET, '/commerce/cart/create', data, function (err, data) {
        if (err) {
            return cb(err);
        }
        if (data.status !== 200) {
            return cb(data.body);
        }
        return cb(null, data.body);
    });
}
