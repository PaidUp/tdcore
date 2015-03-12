'use strict';
var assert = require('chai').assert;
var userService = require('../services/user.service');
var authService = require('../services/auth.service');
var tokenTDUser = 'TDUserToken-CHANGE-ME!';

describe.only('flow', function () {
  it('create user', function (done) {
    userService.create({}, function (err, data) {
      if (err) {
        return done(err);
      }
      assert(data.code);
      return done();
    });
  });

  it('auth signup', function (done) {
    authService.signup({}, function (err, data) {
      if (err) {
        return done(err);
      }
      assert(data.code);
      return done();
    });
  });

  it('user current', function (done) {
    userService.current({}, '', function (err, data) {
      if (err) {
        return done(err);
      }
      assert.equal(data,401);
      return done();
    });
  });

  it('create user logout', function (done) {
    authService.logout({}, '', function (err, data) {
      if (err) {
        return done(err);
      }
      assert(data);
      return done();
    });
  });

  it('user login local', function (done) { 
    authService.login({}, function (err, data) {
      if (err) {
        return done(err);
      }
      assert(data.name);
      return done();
    });
  });

  it('user login facebook', function (done) {
    this.timeout(5000);
    var credentials = {
      facebookToken: 'FAKE'
    }; 
    authService.facebook(credentials, function (err, data) {
      if (err) {
        return done(err);
      }
      assert(data.code);
      return done();
    });
  });

  it('verify request', function (done) {
    authService.verifyRequest({}, '', function (err, data) {
      if (err) {
        return done(err);
      }
      assert(data);
      return done();
    });
  });

  it('verify', function (done) {
    authService.verify({}, '', function (err, data) {
      if (err) {
        return done(err);
      }
      assert(data);
      return done();
    });
  });

  it('password reset request', function (done) {
    authService.passwordResetRequest({}, function (err, data) {
      if (err) {
        return done(err);
      }
      assert(data);
      return done();
    });
  });

  it('password reset', function (done) {
    this.timeout(5000);
    authService.passwordReset({}, function (err, data) {
      if (err) {
        return done(err);
      }
      assert(data.code);
      return done();
    });
  });

  it('password update', function (done) {
    authService.passwordUpdate({}, '', function (err, data) {
      if (err) {
        return done(err);
      }
      assert(data);
      return done();
    });
  });

  it('email update', function (done) {
    authService.emailUpdate({}, '', function (err, data) {
      if (err) {
        return done(err);
      }
      assert(data);
      return done();
    });
  });

  it('user update', function (done) {
    userService.update({}, '', function (err, data) {
      if (err) {
        return done(err);
      }
      assert(data);
      return done();
    });
  });

  it('user find', function (done) {
    userService.find({}, '', function (err, data) {
      if (err) {
        return done(err);
      }
      assert.operator(data.length, '>', 0);
      return done();
    });
  });

  it('user contact create', function (done) {
    userService.contactCreate({}, '', function (err, data) {
      if (err) {
        return done(err);
      }
      assert(data);
      return done();
    });
  });

  it('user contact list', function (done) {
    userService.contactList({}, '', function (err, data) {
      if (err) {
        return done(err);
      }
      assert(data);
      return done();
    });
  });

  it('user contact load', function (done) {
    userService.contactLoad({}, '', '', function (err, data) {
      if (err) {
        return done(err);
      }
      assert(data);
      return done();
    });
  });

  it('user contact update', function (done) {
    userService.contactUpdate({}, '', '', function (err, data) {
      if (err) {
        return done(err);
      }
      assert(data);
      return done();
    });
  });

  it('user contact delete', function (done) {
    userService.contactDelete({}, '', '', function (err, data) {
      if (err) {
        return done(err);
      }
      assert(data);
      return done();
    });
  });
  
  it('user address create', function (done) {
    userService.addressCreate({}, '', function (err, data) {
      if (err) {
        return done(err);
      }
      assert(data);
      return done();
    });
  });

  it('user address list', function (done) {
    userService.addressList({}, '', function (err, data) {
      if (err) {
        return done(err);
      }
      assert(data);
      return done();
    });
  });

  it('user address load', function (done) {
    userService.addressLoad({}, '', '', function (err, data) {
      if (err) {
        return done(err);
      }
      assert(data);
      return done();
    });
  });

  it('user address update', function (done) {
    userService.addressUpdate({}, '', '', function (err, data) {
      if (err) {
        return done(err);
      }
      assert(data);
      return done();
    });
  });

  it('user address delete', function (done) {
    userService.addressDelete({}, '', '', function (err, data) {
      if (err) {
        return done(err);
      }
      assert(data);
      return done();
    });
  });

  it('create user (child)', function (done) {
    userService.create({}, function (err, data) {
      if (err) {
        return done(err);
      }
      assert(data.code);
      return done();
    });
  });

  it('user relation create', function(done) {
    userService.relationCreate({}, function (err, data) {
      if (err) {
        return done(err);
      }
      return done();
    });
  });

  it('user relation list', function(done) {
    userService.relationList({}, '', function (err, data) {
      if (err) {
        return done(err);
      }
      assert(data);
      return done();
    });
  });
  
});