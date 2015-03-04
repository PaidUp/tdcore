'user strict';

var all = {
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
  },
  commerce: {
    connection: {
      isHttps: false,
      host: 'localhost',
      port: 9002
    }
  },
  croudfunding: {
    connection: {
      isHttps: false,
      host: 'localhost',
      port: 9003
    }
  },
  loan: {
    connection: {
      isHttps: false,
      host: 'localhost',
      port: 9004
    }
  },
  payment: {
    connection: {
      isHttps: false,
      host: 'localhost',
      port: 9005
    }
  }
};

module.exports = all;