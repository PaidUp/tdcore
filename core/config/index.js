'user strict';

var all = {
    methods:{
        POST:'POST',
        GET:'GET',
        PUT:'PUT',
        DELETE:'DELETE'
    },
    user:{
      connection:{
        isHttps:false,
        host: 'localhost',
        port: 9001
      }
    }
};

module.exports = all;