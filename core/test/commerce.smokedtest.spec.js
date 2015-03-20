'use strict';
var assert = require('assert');
var commerceService = require('../services/commerce.service.js');

var conn = {
    token: 'nodeCommercePass',
    urlPrefix: '/api/v1',
    isHttps: false,
    host: 'localhost',
    port: 9002
};

describe.only('commerce.smokedtest - commerce service test - ', function () {

    commerceService.init(conn);
    this.timeout(30000);

    it('Create Cart', function (done) {
        commerceService.cartCreate(function (err, data) {
            if (err) {
                done(err);
            }
            if (typeof(data.cartId) !== 'undefined') {
                done();
            }
            else {
                done(data);
            }
        });
    });

    it('Cart Add', function (done) {
        commerceService.cartAdd(0, {}, function (err, data) {
            if (err) {
                assert(err.code, "Magento Error");
                if((err.message.indexOf('missing value for') != 0)&&(err.message.indexOf('quoteId') != 0)) {
                    assert(true);
                    done();
                }
                else {
                    done(err);
                }
            }
            else {
                done('Expected err');
            }
        });
    });

    it('Cart Remove', function (done) {
        commerceService.cartRemove(0, {}, function (err, data) {
            if (err) {
                assert(err.code, "Magento Error");
                if((err.message.indexOf('missing value for') != 0)&&(err.message.indexOf('quoteId') != 0)) {
                    assert(true);
                    done();
                }
                else {
                    done(err);
                }
            }
            else {
                done('Expected err');
            }
        });
    });

    it('Cart List', function (done) {
        commerceService.cartList(0, function (err, data) {
            if (err) {
                assert(err.code, "Magento Error");
                if((err.message.indexOf('missing value for') != 0)&&(err.message.indexOf('quoteId') != 0)) {
                    assert(true);
                    done();
                }
                else {
                    done(err);
                }
            }
            else {
                done('Expected err');
            }
        });
    });

    it('Cart Address', function (done) {
        commerceService.cartAddress(0, {}, function (err, data) {
            if (err) {
                assert(err.code, "Magento Error");
                if((err.message.indexOf('missing value for') != 0)&&(err.message.indexOf('quoteId') != 0)) {
                    assert(true);
                    done();
                }
                else {
                    done(err);
                }
            }
            else {
                done('Expected err');
            }
        });
    });

    it('Cart Update Product Price', function (done) {
        commerceService.cartUpdateProductPrice(0, 0, 0, function (err, data) {
            if (err) {
                assert(err.code, "Magento Error");
                if((err.message.indexOf('missing value for') != 0)&&(err.message.indexOf('quoteId') != 0)) {
                    assert(true);
                    done();
                }
                else {
                    done(err);
                }
            }
            else {
                done('Expected err');
            }
        });
    });

    it('Cart Update Customer', function (done) {
        commerceService.cartUpdateCustomer(0, {}, function (err, data) {
            if (err) {
                assert(err.code, "Magento Error");
                if((err.message.indexOf('missing value for') != 0)&&(err.message.indexOf('quoteId') != 0)) {
                    assert(true);
                    done();
                }
                else {
                    done(err);
                }
            }
            else {
                done('Expected err');
            }
        });
    });

    it('Cart Shipping', function (done) {
        commerceService.cartSetShipping(0, {}, function (err, data) {
            if (err) {
                assert(err.code, "Magento Error");
                if((err.message.indexOf('missing value for') != 0)&&(err.message.indexOf('quoteId') != 0)) {
                    assert(true);
                    done();
                }
                else {
                    done(err);
                }
            }
            else {
                done('Expected err');
            }
        });
    });

    it('Cart Payment', function (done) {
        commerceService.cartSetPayment(0, {}, function (err, data) {
            if (err) {
                assert(err.code, "Magento Error");
                if((err.message.indexOf('missing value for') != 0)&&(err.message.indexOf('quoteId') != 0)) {
                    assert(true);
                    done();
                }
                else {
                    done(err);
                }
            }
            else {
                done('Expected err');
            }
        });
    });

    it('Cart Place', function (done) {
        commerceService.cartPlace(0, function (err, data) {
            if (err) {
                assert(err.code, "Magento Error");
                if((err.message.indexOf('missing value for') != 0)&&(err.message.indexOf('quoteId') != 0)) {
                    assert(true);
                    done();
                }
                else {
                    done(err);
                }
            }
            else {
                done('Expected err');
            }
        });
    });

    it('Cart View', function (done) {
        commerceService.cartView(0, function (err, data) {
            if (err) {
                assert(err.code, "Magento Error");
                if((err.message.indexOf('missing value for') != 0)&&(err.message.indexOf('quoteId') != 0)) {
                    assert(true);
                    done();
                }
                else {
                    done(err);
                }
            }
            else {
                done('Expected err');
            }
        });
    });

    it('Cart Totals', function (done) {
        commerceService.cartTotals(0, function (err, data) {
            if (err) {
                assert(err.code, "Magento Error");
                if((err.message.indexOf('missing value for') != 0)&&(err.message.indexOf('quoteId') != 0)) {
                    assert(true);
                    done();
                }
                else {
                    done(err);
                }
            }
            else {
                done('Expected err');
            }
        });
    });

    it('Catalog Category', function (done) {
        commerceService.catalogCategory(0, function (err, data) {
            if (err) {
                assert(err.code, "Magento Error");
                if(err.message.indexOf('Category not exists') != -1) {
                    assert(true);
                    done();
                }
                else {
                    done(err);
                }
            }
            else {
                done('Expected err');
            }
        });
    });

    it('Catalog Product', function (done) {
        commerceService.catalogProduct(0, function (err, data) {
            if (err) {
                assert(err.code, "Magento Error");
                if(err.message.indexOf('Product not exists') != -1) {
                    assert(true);
                    done();
                }
                else {
                    done(err);
                }
            }
            else {
                done('Expected err');
            }
        });
    });

    it('Order Load', function (done) {
        commerceService.orderLoad(0, function (err, data) {
            if (err) {
                assert(err.code, "Magento Error");
                if(err.message.indexOf('Requested order not exists') != -1) {
                    assert(true);
                    done();
                }
                else {
                    done(err);
                }
            }
            else {
                done('Expected err');
            }
        });
    });

    it('Order List', function (done) {
        commerceService.orderList({incrementId: "10000000"}, function (err, data) {
            if (err) {
                done(err);
            }
            else {
                done();
            }
        });
    });

    it('Order Comment Add', function (done) {
        commerceService.orderCommentAdd(0, "", "pending", function (err, data) {
            if (err) {
                assert(err.code, "Magento Error");
                if(err.message.indexOf('missing value for') != -1) {
                    assert(true);
                    done();
                }
                else {
                    done(err);
                }
            }
            else {
                done('Expected err');
            }
        });
    });

    it('Order Update Status', function (done) {
        commerceService.orderUpdateStatus(0, "pending", function (err, data) {
            if (err) {
                assert(err.code, "StatusNotImplemented");
                done();
            }
            else {
                done('Expected err');
            }
        });
    });


    it('Transaction Create', function (done) {
        commerceService.transactionCreate(0, 0, {}, function (err, data) {
            if (err) {
                assert(err.code, "Magento Error");
                if(err.message.indexOf('missing value for') != -1) {
                    assert(true);
                    done();
                }
                else {
                    done(err);
                }
            }
            else {
                done('Expected err');
            }
        });
    });

    it('Transaction List', function (done) {
        commerceService.transactionList(0, function (err, data) {
            if (err) {
                assert(err.code, "Magento Error");
                if(err.message.indexOf('missing value for') != -1) {
                    assert(true);
                    done();
                }
                else {
                    done(err);
                }
            }
            else {
                done('Expected err');
            }
        });
    });

});