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
      urlPrefix : '/api/v1',
      isHttps: false,
      host: 'localhost',
      port: 9000
    }
  },
  user: {
    connection: {
      urlPrefix : '/api/v1',
      isHttps: false,
      host: 'localhost',
      port: 9001
    }
  },
  payment: {
    connection: {
      urlPrefix : '/api/v1',
      isHttps: false,
      host: 'localhost',
      port: 9005
    }
  }
};

module.exports = all;