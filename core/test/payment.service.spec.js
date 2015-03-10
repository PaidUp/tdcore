
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
        console.log('order id: ' + datao);

        return cb(null, datao);
    });
};

describe.skip('payment services test', function () {
  it('createCustomer', function (done) {this.timeout(60000);
    var body = modelSpec.user;
    paymentService.createCustomer(body, token, function (err, data) {
      if (err) {
        return done(err);
      }
        console.log("Data");
        console.log(data);
        assert.equal(body.email, data.email, 'The email is not equal');
        assert.notEqual(0, data.id.length, 'Fail get customer id');
        modelSpec.customer = data;
        return done();
    });
  });
  it('createCard',function(done){
      this.timeout(60000);
      var cardDetails = modelSpec.cardDetails;
      paymentService.createCard(cardDetails, token, function(err, data){
          console.log("Data credit card");
          console.log(data);
          console.log("Data credit card err");
          console.log(err);
          if(err){
              return done(err);
          }
          modelSpec.creditCard = data;
          assert(data, 'No data response from credit card');
          assert.notEqual(0, data.id.length, 'id from credit card is not present');
          return done();
      })
  });
  it('associateCard', function(done){
      this.timeout(60000);
      var data = modelSpec.associateCardData();
      paymentService.associateCard(data, token, function(err, data){
          if(err){
            return done(err);
          }
          console.log('associate card');
          console.log(data);
          assert(data.cards.length === 1, 'The card associate must be one');
          return done();
      });
  });
  it('createBank', function(done){
      this.timeout(60000);
      var bankDetails =  modelSpec.bankDetails();
      paymentService.createBank(bankDetails, token, function(err, data){
          if(err){
              return done(err);
          }
          console.log('create bank');
          console.log(data);
          modelSpec.bankAccount = data;
          assert(data, 'The response create bank must be exist');

          var last4Exp = modelSpec.bankDetails().account_number.slice(6);
          var last4 = data.account_number.slice(6);
          assert.equal(last4Exp, last4);
          return done();
      });
  });
  it('associateBank', function(done){
      this.timeout(60000);
      var associateBankData = modelSpec.associateBankData();

      paymentService.associateBank(associateBankData, token, function(err, data){
          if(err){
              return done(err);
          }
          console.log('associate bank');
          console.log(data);
          assert.equal(1, data.bankAccounts.length, 'Expected one account associated');
          return done();
      })
  });
  it('createOrder', function(done){
      this.timeout(60000);
      var order = modelSpec.order();
      createOrder(order,token, function(err, datao){
          if(err){
              return done(err);
          }
          console.log("datao");
          console.log(datao);


          assert(datao,'The response must not be null');


          modelSpec.orderId = datao.orders[0].id;
          return done();
      });
  });
    it('createOrderBank', function(done){
        this.timeout(60000);
        var order = modelSpec.order();
        createOrder(order,token, function(err, datao){
            if(err){
                return done(err);
            }
            assert(datao,'The response must not be null');
            modelSpec.orderBankId = datao.orders[0].id;
            return done();
        });
    });
  it('debitCard', function(done){
      this.timeout(60000);
      var debitCardData = modelSpec.debitCardData();

      console.log('debit card data');
      console.log(debitCardData);

      paymentService.debitCard(debitCardData, token, function(err, data){
          if(err)
          return done(err);
          console.log('debit card');
          console.log(data);
          assert.equal(1, data.debits.length, 'Must exist one debit');
          return done();
      });
  });
  it('createBankVerification', function(done){
      this.timeout(60000);
      var dataBankId = {
          bankId : modelSpec.bankAccount.id
      };
      paymentService.createBankVerification(dataBankId, token, function(err, data){
         if(err){
             done(err);
         }
          console.log('create bank verification ');
          console.log(data);
          assert.equal(1, data.bankAccountVerifications.length, 'Must exist one account pending to verification');
          modelSpec.bankAccountVerification = data.bankAccountVerifications[0];
          done();
      });
  });

  it('confirmBankVerification', function(done){
    this.timeout(60000);
    var confirmBankVerificationData = modelSpec.confirmBankVerificationData();
    paymentService.confirmBankVerification(confirmBankVerificationData, token, function(err, data){
        console.log('\nconfirm bank verification ');
        console.log(data);
        console.log(err);

        console.log('confirm bank verification ');
        if(err){
        done(err);
      }
      assert.equal(1, data.bankAccountVerifications.length, 'Must exist one account pending to verification');
      modelSpec.bankAccountVerification = data.bankAccountVerifications[0];
      done();
      });
  });

  it('debitBank', function(done){
      this.timeout(60000);
          var debitBankData = modelSpec.debitBankData();
          paymentService.debitBank(debitBankData, token, function(err, data){
              if(err){
                  return done(err);
              }
              console.log('debit bank');
              console.log(data);
              assert.equal(1, data.debits.length, 'Must exist one debit bank');
             return done();
          });
  });
  it('listCustomerBanks', function(done){
  this.timeout(60000);
  paymentService.listCustomerBanks(modelSpec.customer.id, token, function(err, data){
       if(err){
          return done(err);
      }
      console.log('list customer banks');
      console.log(data);
      assert.equal(1, data.bankAccounts.length, 'Must exist one bank account');
      return done();
    });
  });
  it('listCards', function(done){
      this.timeout(60000);
      paymentService.listCards(modelSpec.customer.id, token, function(err, data){
          if(err){
               return done(err);
          }
          console.log('list customer cards');
          console.log(data);
          assert.equal(1, data.cards.length, 'Must exist one credit card');
          return done();
        });
  })
  it('loadBankVerification', function(done){
      this.timeout(60000);
      paymentService.loadBankVerification(modelSpec.bankAccountVerification.id, token, function(err, data){
          if(err){
              return done(err);
          }
          console.log('load bank verification');
          console.log(data);
          assert.equal(1, data.bankAccountVerifications.length, 'Must exist one credit card');
          assert.equal('succeeded', data.bankAccountVerifications[0].verificationStatus, 'Must be succeeded state');
          return done();
      });
  });
    it('prepareBank', function(done){
        this.timeout(60000);
        var prepareBankData = modelSpec.prepareBankData();
        paymentService.prepareBank(prepareBankData, token, function(err, data){
            if(err){
                return done(err);
            }
            console.log('prepare bank');
            console.log(data);
            assert.equal(1, data.bankAccounts.length, 'Must exist one bank account');
            return done();
        });
    })
    it('prepareCard', function(done){
        this.timeout(60000);
        var prepareCardData = modelSpec.prepareCardData();
        paymentService.prepareCard(prepareCardData, token, function(err, data){
            if(err){
                return done(err);
            }
            console.log('prepare card');
            console.log(data);
            assert.equal(1, data.cards.length, 'Must exist one credit card');
            return done();
        });
    });

    it('fetchBank', function(done){
        this.timeout(60000);
        paymentService.fetchBank(modelSpec.bankAccount.id, token, function(err, data){
            if(err){
                return done(err);
            }
            console.log('fetch bank');
            console.log(data);
            assert.equal(1, data.bankAccounts.length, 'Must exist one bank account');
            return done();
        });
    });
    it('fetchCard', function(done){
        this.timeout(60000);
        paymentService.fetchCard(modelSpec.creditCard.id, token, function(err, data){
            if(err){
                return done(err);
            }
            console.log('fetch card');
            console.log(data);
            assert.equal(1, data.cards.length, 'Must exist one credit card');
            return done();
        });
    });

    it('getUserDefaultBankId', function(done){
        this.timeout(60000);
        paymentService.getUserDefaultBankId(modelSpec.customer.id, token, function(err, data){
            if(err){
                return done(err);
            }
            console.log('get user default bank id: '+data);
            assert.equal(modelSpec.bankAccount.id, data, 'bank id is not correct');
            return done();
        });
    });
    it('getUserDefaultCardId', function(done){
        this.timeout(60000);
        paymentService.getUserDefaultCardId(modelSpec.customer.id, token, function(err, data){
            if(err){
                return done(err);
            }
            console.log('get user default card id: '+data);
            assert.equal(modelSpec.creditCard.id, data, 'card id is not correct');
            return done();
        });
    });
    it('deleteBankAccount', function(done){
        this.timeout(60000);
        paymentService.deleteBankAccount({bankId : modelSpec.bankAccount.id}, token, function(err, data){
            if(err){
                return done(err);
            }
            console.log('delete bank account '+JSON.stringify(data)+' ----');
            console.log(data);
            assert.equal('{}', JSON.stringify(data));
            return done();
        });
    });

});