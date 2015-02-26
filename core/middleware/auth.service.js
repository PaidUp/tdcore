'use strict';

function isAuthenticatedServer(meToken){
  return function(req, res, next){
    if(req.headers.authorization === meToken){
      next();
    }else{
      return res.json(401,{'test':'authenticated fail'});
    }
  };
}

exports.isAuthenticatedServer = isAuthenticatedServer;
