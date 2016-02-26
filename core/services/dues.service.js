'user strict'

var httpUtil = require('../http/http.util');
var config = require('../config/index');

var conn = {};

function init (connection) {
  conn = connection;
}


function generateDues(params, cb) {
  httpUtil.request(conn, config.methods.POST, '/dues/generate', params, function (err, data) {

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
  generateDues : generateDues
}