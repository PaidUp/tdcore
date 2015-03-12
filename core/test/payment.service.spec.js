
'use strict';
var assert = require('assert');
var paymentService = require('../services/payment.service.js');
var faker = require('faker');
var modelSpec = require('./payment.model.spec');

var token = 'nodePaymentPass';

function createOrder(order, token, cb){
    paymentService.createOrder(order, token, function(err, datao){
        if(err){
            return cb(err);
        }
        return cb(null, datao);
    });
};

describe.only('payment services test', function () {
  it('createCustomer', function (done) {this.timeout(60000);
    paymentService.createCustomer({}, token, function (err, data) {
      if (err) {
        return done(err);
      }
      assert.equal('ValidationError', data.code);
      return done();
    });
  });

  it('createCard',function(done){
      this.timeout(60000);
      paymentService.createCard({}, token, function(err, data){
          if(err){
              return done(err);
          }
          assert.equal('ValidationError', data.code);
          return done();
      })
  });

  it('associateCard', function(done){
      this.timeout(60000);
      paymentService.associateCard({}, token, function(err, data){
          if(err){
            return done(err);
          }
          assert.equal('ValidationError', data.code);
          return done();
      });
  });
  it('createBank', function(done){
      this.timeout(60000);
      paymentService.createBank({}, token, function(err, data){
          if(err){
              return done(err);
          }
          assert.equal('ValidationError', data.code);
          return done();
      });
  });
  it('associateBank', function(done){
      this.timeout(60000);
      paymentService.associateBank({}, token, function(err, data){
          if(err){
              return done(err);
          }
          assert.equal('ValidationError', data.code);
          return done();
      })
  });
  it('createOrder', function(done){
      this.timeout(60000);
      createOrder({},token, function(err, datao){
          if(err){
              return done(err);
          }

          assert.equal('ValidationError', datao.code);
          return done();
      });
  });
    it('createOrderBank', function(done){
        this.timeout(60000);
        createOrder({},token, function(err, datao){
            if(err){
                return done(err);
            }
            assert.equal('ValidationError', datao.code);
            return done();
        });
    });
  it('debitCard', function(done){
      this.timeout(60000);
      paymentService.debitCard({}, token, function(err, data){
          if(err)
          return done(err);
          assert.equal('ValidationError', data.code);
          return done();
      });
  });

  it('createBankVerification', function(done){
      this.timeout(60000);
      paymentService.createBankVerification({}, token, function(err, data){
         if(err){
             done(err);
         }
          assert.equal('ValidationError', data.code);
          return done();
      });
  });

  it('confirmBankVerification', function(done){
    this.timeout(60000);
    paymentService.confirmBankVerification({}, token, function(err, data){
        if(err){
        done(err);
      }
      assert.equal('ValidationError', data.code);
      return done();
      });
  });

  it('debitBank', function(done){
      this.timeout(60000);
          paymentService.debitBank(null, token, function(err, data){
              if(err){
                  return done(err);
              }
              assert.equal('ValidationError', data.code);
              return done();
          });
  });
  it('listCustomerBanks', function(done){
  this.timeout(60000);
  paymentService.listCustomerBanks(null, token, function(err, data){
       if(err){
          return done(err);
      }
      assert.equal(404, data.code);
      return done();
    });
  });
  it('listCards', function(done){
      this.timeout(60000);
      paymentService.listCards('...', token, function(err, data){
          if(err){
               return done(err);
          }
          assert.equal(404, data.code);
          return done();
        });
  });
  it('loadBankVerification', function(done){
      this.timeout(60000);
      paymentService.loadBankVerification(null, token, function(err, data){
          if(err){
              return done(err);
          }
          assert.equal(404, data.code);
          return done();
      });
  });
    it('prepareBank', function(done){
        this.timeout(60000);
        paymentService.prepareBank({}, token, function(err, data){
            if(err){
                return done(err);
            }
            assert.equal('ValidationError', data.code);
            return done();
        });
    })
    it('prepareCard', function(done){
        this.timeout(60000);
        paymentService.prepareCard({}, token, function(err, data){
            if(err){
                return done(err);
            }
            assert.equal('ValidationError', data.code);
            return done();
        });
    });

    it('fetchBank', function(done){
        this.timeout(60000);
        paymentService.fetchBank(null, token, function(err, data){
            if(err){
                return done(err);
            }
            assert.equal(404, data.code);
            return done();
        });
    });
    it('fetchCard', function(done){
        this.timeout(60000);
        paymentService.fetchCard(null, token, function(err, data){
            if(err){
                return done(err);
            }
            assert.equal(404, data.code);
            return done();
        });
    });

    it('getUserDefaultBankId', function(done){
        this.timeout(60000);
        paymentService.getUserDefaultBankId(null, token, function(err, data){
            if(err){
                return done(err);
            }
            assert.equal(404, data.code);
            return done();
        });
    });
    it('getUserDefaultCardId', function(done){
        this.timeout(60000);
        paymentService.getUserDefaultCardId(null, token, function(err, data){
            if(err){
                return done(err);
            }
            assert.equal(404, data.code);
            return done();
        });
    });
    it('deleteBankAccount', function(done){
        this.timeout(60000);
        paymentService.deleteBankAccount({}, token, function(err, data){
            if(err){
                return done(err);
            }
            assert.equal('ValidationError', data.code);
            return done();
        });
    });
});