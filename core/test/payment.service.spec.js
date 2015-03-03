
'use strict';
var assert = require('assert');
var paymentService = require('../services/payment.service.js');
var faker = require('faker');
var modelSpec = require('./payment.model.spec');

var token = 'nodePaymentPass';
var customer = {};
var creditCard = {};


function createOrder(order, token, cb){
    paymentService.createOrder(order, token, function(err, datao){
        if(err){
            return cb(err);
        }
        console.log('order id');
        console.log(datao);

        return cb(null, datao);
    });
};

describe.only('payment services test', function () {
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
          assert(datao,'The response must not be null');
          modelSpec.orderId = datao;
          console.log(modelSpec);
          return done();
      });
  });
  it('debitCard', function(done){
      this.timeout(60000);
      var debitCardData = modelSpec.debitCardData();

      paymentService.debitCard(debitCardData, token, function(err, data){
          if(err)
          return done(err);
          console.log('debit card');
          console.log(data);
          assert.equal(1, data.debits.length, 'Must exist one debit');
          return done();
      });
  });
});