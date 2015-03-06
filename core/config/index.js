'user strict';

var all = {
  path:'/api/v1',
  methods: {
    POST : 'POST',
    GET : 'GET',
    PUT : 'PUT',
    DELETE : 'DELETE'
  },
  app: {
    connection: {
      isHttps: false,
      host: 'localhost',
      port: 9000
    }
  },
  user: {
    connection: {
      isHttps: false,
      host: 'localhost',
      port: 9001
    }
  }
};

module.exports = all;