'use strict';
var assert = require('chai').assert;
var userService = require('../services/user.service');
var authService = require('../services/auth.service');
var faker = require('faker');
var userModel = require('./user.model.spec');
var tokenTDUser = 'TDUserToken-CHANGE-ME!';

describe.only('flow', function () {
  it('create user', function (done) {
    var data = {
      firstName : userModel.firstName,
      lastName : userModel.lastName
    };
    userService.create(data, tokenTDUser, function (err, data) {
      if (err) {
        return done(err);
      }
      userModel.userId = data.userId;
      assert(data.userId);
      return done();
    });
  });

  it('auth signup', function (done) {
    var credentialFake = {
      userId: userModel.userId,
      email: userModel.email,
      password: userModel.password,
      rememberMe: true
    };
    authService.signup(credentialFake, tokenTDUser, function (err, data) {
      if (err) {
        return done(err);
      }
      userModel.token = data.token;
      assert(data.token);
      return done();
    });
  });

  it('user current', function (done) {
    userService.current({}, tokenTDUser, userModel.token, function (err, data) {
      if (err) {
        return done(err);
      }
      assert(data._id);
      assert(data.email);
      assert.equal(data._id,userModel.userId);
      return done();
    });
  });

  it('create user logout', function (done) {
    authService.logout({}, tokenTDUser, userModel.token, function (err, data) {
      if (err) {
        return done(err);
      }
      userModel.token = '';
      assert(data);
      return done();
    });
  });

  it('user login local', function (done) {
    var credentials = {
      email: userModel.email,
      password: userModel.password,
      rememberMe: true
    };    
    authService.login(credentials, tokenTDUser, function (err, data) {
      if (err) {
        return done(err);
      }
      userModel.token = data.token;
      assert(data.token);
      return done();
    });
  });

  it('user login facebook', function (done) {
    this.timeout(5000);
    var credentials = {
      facebookToken: 'FAKE'
    }; 
    authService.facebook(credentials, tokenTDUser, function (err, data) {
      if (err) {
        return done(err);
      }
      return done();
    });
  });

  it('verify request', function (done) {
    authService.verifyRequest({}, tokenTDUser, userModel.userId, function (err, data) {
      if (err) {
        return done(err);
      }
      assert(data);
      return done();
    });
  });

  it('verify', function (done) {
    var data = {
      verifyToken: 'xxx'
    };
    authService.verify(data, tokenTDUser, userModel.userId, function (err, data) {
      if (err) {
        return done(err);
      }
      assert(data);
      return done();
    });
  });

  it('password reset request', function (done) {
    var data = {
      email: userModel.email
    }
    authService.passwordResetRequest(data, tokenTDUser, function (err, data) {
      if (err) {
        return done(err);
      }
      assert(data);
      return done();
    });
  });

  it('password reset', function (done) {
    this.timeout(5000);
    var data = {
      verifyToken: 'xxx',
      password: userModel.password
    };
    authService.passwordReset(data, tokenTDUser, function (err, data) {
      if (err) {
        return done(err);
      }
      assert(data.code);
      return done();
    });
  });

  it('password update', function (done) {
    var data = {
      newPassword: userModel.password,
      currentPassword: userModel.password
    }
    authService.passwordUpdate(data, tokenTDUser, userModel.userId, function (err, data) {
      if (err) {
        return done(err);
      }
      assert(data);
      return done();
    });
  });

  it('email update', function (done) {
    var data = {
      email: 'email@email.com',
      userId: userModel.userId
    }
    authService.emailUpdate(data, tokenTDUser, userModel.userId, function (err, data) {
      if (err) {
        return done(err);
      }
      assert(data);
      return done();
    });
  });

  it('user update', function (done) {
    var data = {
      userId: userModel.userId,
      firstName: userModel.firstName,
      lastName: userModel.lastName,
      gender: userModel.gender,
      birthDate: userModel.birthDate
    }
    userService.update(data, tokenTDUser, userModel.userId, function (err, data) {
      if (err) {
        return done(err);
      }
      assert(data);
      return done();
    });
  });

  it('user find', function (done) {
    var filter = {};
    userService.find(filter, tokenTDUser, userModel.userId, function (err, data) {
      if (err) {
        return done(err);
      }
      assert.operator(data.length, '>', 0);
      return done();
    });
  });

  it('user contact create', function (done) {
    var data = {
      userId: userModel.userId,
      label: userModel.label,
      type: userModel.type,
      valueContact: userModel.valueContact
    };
    userService.contactCreate(data, tokenTDUser, userModel.userId, function (err, data) {
      if (err) {
        return done(err);
      }
      userModel.contactId = data.contactId;
      assert(data.contactId);
      return done();
    });
  });

  it('user contact list', function (done) {
    var data = {
      userId: userModel.userId
    };
    userService.contactList(data, tokenTDUser, userModel.userId, function (err, data) {
      if (err) {
        return done(err);
      }
      assert.operator(data.length, '>', 0);
      return done();
    });
  });

  it('user contact load', function (done) {
    userService.contactLoad({}, tokenTDUser, userModel.userId, userModel.contactId, function (err, data) {
      if (err) {
        return done(err);
      }
      assert(data.contactId);
      return done();
    });
  });

  it('user contact update', function (done) {
    var data = {
      userId: userModel.userId,
      value: userModel.valueContact
    }
    userService.contactUpdate(data, tokenTDUser, userModel.userId, userModel.contactId, function (err, data) {
      if (err) {
        return done(err);
      }
      assert(data.contactId);
      return done();
    });
  });

});