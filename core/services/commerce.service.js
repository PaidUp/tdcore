'use strict';

var httpUtil = require('../http/http.util');
var config = require('../config/index');
var urlencode = require('urlencode');

exports.init = function(connection) {
    config.app.connection = connection;
}

// **
// ** Cart
// **
exports.cartCreate = function(cb) {
    httpUtil.httpRequest(config.app.connection, config.methods.GET, '/commerce/cart/create', {}, function (err, data) {
        if (err) {
            return cb(err);
        }
        if (data.status !== 200) {
            return cb(data.body);
        }
        return cb(null, data.body);
    });
}

exports.cartAdd = function(shoppingCartProductEntity, cb) {
  httpUtil.httpRequest(config.app.connection, config.methods.POST, '/commerce/cart/add',
    shoppingCartProductEntity, function (err, data) {
    if (err) {
        return cb(err);
    }
    if (data.status !== 200) {
        return cb(data.body);
    }
    return cb(null, data.body);
  });
}

exports.cartRemove = function(cartId, shoppingCartProductEntity, cb) {
    httpUtil.httpRequest(config.app.connection, config.methods.POST, '/commerce/cart/remove',
        {
            cartId:cartId,
            shoppingCartProductEntity: shoppingCartProductEntity
        }, function (err, data) {
            if (err) {
                return cb(err);
            }
            if (data.status !== 200) {
                return cb(data.body);
            }
            return cb(null, data.body);
        });
}

exports.cartList = function(cartId, cb) {
    httpUtil.httpRequest(config.app.connection, config.methods.GET, '/commerce/cart/list/' + urlencode(cartId), {}, function (err, data) {
            if (err) {
                return cb(err);
            }
            if (data.status !== 200) {
                return cb(data.body);
            }
            return cb(null, data.body);
        });
}

exports.cartAddress = function(cartId, address, cb) {
    httpUtil.httpRequest(config.app.connection, config.methods.POST, '/commerce/cart/address',
        {
            cartId: cartId,
            shoppingCartAddressEntity: address
        }, function (err, data) {
        if (err) {
            return cb(err);
        }
        if (data.status !== 200) {
            return cb(data.body);
        }
        return cb(null, data.body);
    });
}

exports.cartUpdateProductPrice = function(cartId, productId, amount, cb) {
    httpUtil.httpRequest(config.app.connection, config.methods.POST, '/commerce/cart/update/price',
        {
            cartId: cartId,
            productId: productId,
            amount: amount
        }, function (err, data) {
            if (err) {
                return cb(err);
            }
            if (data.status !== 200) {
                return cb(data.body);
            }
            return cb(null, data.body);
        });
}

exports.cartUpdateCustomer = function(cartId, customer, cb) {
    httpUtil.httpRequest(config.app.connection, config.methods.POST, '/commerce/cart/customer',
        {
            cartId: cartId,
            customer: customer
        }, function (err, data) {
            if (err) {
                return cb(err);
            }
            if (data.status !== 200) {
                return cb(data.body);
            }
            return cb(null, data.body);
        });
}

exports.cartSetShipping = function(cartId, shipping, cb) {
    httpUtil.httpRequest(config.app.connection, config.methods.POST, '/commerce/cart/shipping',
        {
            cartId: cartId,
            shippingMethod: shipping
        }, function (err, data) {
            if (err) {
                return cb(err);
            }
            if (data.status !== 200) {
                return cb(data.body);
            }
            return cb(null, data.body);
        });
}

exports.cartSetPayment = function(cartId, paymentData, cb) {
    httpUtil.httpRequest(config.app.connection, config.methods.POST, '/commerce/cart/payment',
        {
            cartId: cartId,
            paymentData: paymentData
        }, function (err, data) {
            if (err) {
                return cb(err);
            }
            if (data.status !== 200) {
                return cb(data.body);
            }
            return cb(null, data.body);
        });
}

exports.cartPlace = function(cartId, cb) {
    httpUtil.httpRequest(config.app.connection, config.methods.GET, '/commerce/cart/place/' + urlencode(cartId), {}, function (err, data) {
            if (err) {
                return cb(err);
            }
            if (data.status !== 200) {
                return cb(data.body);
            }
            return cb(null, data.body);
        });
}

exports.cartView = function(cartId, cb) {
    httpUtil.httpRequest(config.app.connection, config.methods.GET, '/commerce/cart/view/' + urlencode(cartId), {}, function (err, data) {
        if (err) {
            return cb(err);
        }
        if (data.status !== 200) {
            return cb(data.body);
        }
        return cb(null, data.body);
    });
}

exports.cartTotals = function(cartId, cb) {
    httpUtil.httpRequest(config.app.connection, config.methods.GET, '/commerce/cart/totals/' + urlencode(cartId), {}, function (err, data) {
        if (err) {
            return cb(err);
        }
        if (data.status !== 200) {
            return cb(data.body);
        }
        return cb(null, data.body);
    });
}

// **
// ** Catalog
// **
exports.catalogCategory = function(categoryId, cb) {
    httpUtil.httpRequest(config.app.connection, config.methods.GET, '/commerce/catalog/category/' + urlencode(categoryId), {}, function (err, data) {
        if (err) {
            return cb(err);
        }
        if (data.status !== 200) {
            return cb(data.body);
        }
        return cb(null, data.body);
    });
}

exports.catalogProduct = function(productId, cb) {
    httpUtil.httpRequest(config.app.connection, config.methods.GET, '/commerce/catalog/product/' + urlencode(productId), {}, function (err, data) {
        if (err) {
            return cb(err);
        }
        if (data.status !== 200) {
            return cb(data.body);
        }
        return cb(null, data.body);
    });
}

// **
// ** Order
// **
/*
 orderLoad(orderId
 >>>>> GET /order/load/orderId
 orderList(filter
 >>>>> POST /order/list

 orderCommentAdd(orderId, comment, status
 >>>>> POST /order/comment/create
 orderHold(orderId
 >>>>> GET /order/status/{status}
*/

// **
// ** Transaction
// **
/*
 transactionCreate(orderId, transactionId, details
 >>>>> POST /transaction/create
 transactionList(order.incrementId
 >>>>> GET /transaction/list/order/{orderId}
 */


 // **
 // ** Customer
 // **
 exports.customerCreate = function(user,cb) {
     httpUtil.httpRequest(config.app.connection, config.methods.POST, '/commerce/customer/create', user, function (err, data) {
         if (err) {
             return cb(err);
         }
         if (data.status !== 200) {
             return cb(data.body);
         }
         return cb(null, data.body);
     });
 }

