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
    this.timeout(5000);

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
                done(err);
            }
            else {
                console.log(data);
                if (typeof(data.cartId) == 'undefined') {
                    done();
                }
                else {
                    done(data);
                }
            }
        });
    });

    it('Catalog Category', function (done) {
        commerceService.catalogCategory(0, function (err, data) {
            if (err) {
                done(err);
            }
            else {
                console.log(data);
                done();
            }
        });
    });

    it('Catalog Product', function (done) {
        commerceService.catalogProduct(0, function (err, data) {
            if (err) {
                done(err);
            }
            else {
                console.log(data);
                done();
            }
        });
    });




});