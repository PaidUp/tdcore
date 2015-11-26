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
            cartId: cartId,
            products: shoppingCartProductEntity
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

exports.cartCouponAdd = function(cartInfo, cb) {
  httpUtil.httpRequest(config.app.connection, config.methods.POST, '/commerce/cart/coupon/add',
    cartInfo, function (err, data) {
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

exports.catalogCategoryV2 = function(categoryId, cb) {
    var conf = JSON.parse(JSON.stringify(config.app.connection));
    conf.urlPrefix = '/api/v2';
    httpUtil.httpRequest(conf, config.methods.GET, '/commerce/catalog/category/' + urlencode(categoryId), {}, function (err, data) {
        if (err) {
            return cb(err);
        }
        if (data.status !== 200) {
            return cb(data.body);
        }
        return cb(null, data.body);
    });
}

exports.groupedProduct = function(productId, cb) {
  httpUtil.httpRequest(config.app.connection, config.methods.GET, '/commerce/catalog/product/link/' + urlencode(productId), {}, function (err, data) {
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

exports.catalogProductV2 = function(productId, cb) {
    var conf = JSON.parse(JSON.stringify(config.app.connection));
    conf.urlPrefix = '/api/v2';
    httpUtil.httpRequest(conf, config.methods.GET, '/commerce/catalog/product/' + urlencode(productId), {}, function (err, data) {
        if (err) {
            return cb(err);
        }
        if (data.status !== 200) {
            return cb(data.body);
        }
        return cb(null, data.body);
    });
}

exports.catalogCreate = function(teamData, cb) {
    httpUtil.httpRequest(config.app.connection, config.methods.POST, '/commerce/catalog/create', teamData, function (err, data) {
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

exports.orderLoad = function(orderId, cb) {
    httpUtil.httpRequest(config.app.connection, config.methods.GET, '/commerce/order/load/' + urlencode(orderId), {}, function (err, data) {
        if (err) {
            return cb(err);
        }
        if (data.status !== 200) {
            return cb(data.body);
        }
        return cb(null, data.body);
    });
}

exports.orderList = function(filter, cb) {
    httpUtil.httpRequest(config.app.connection, config.methods.POST, '/commerce/order/list', filter, function (err, data) {
        if (err) {
            return cb(err);
        }
        if (data.status !== 200) {
            return cb(data.body);
        }
        return cb(null, data.body);
    });
}

exports.orderCommentAdd = function(orderId, comment, status, cb) {
    httpUtil.httpRequest(config.app.connection, config.methods.POST, '/commerce/order/comment/create',
        {
            orderId: orderId,
            comment: comment,
            status: status
        }
        , function (err, data) {
        if (err) {
            return cb(err);
        }
        if (data.status !== 200) {
            return cb(data.body);
        }
        return cb(null, data.body);
    });
}

exports.orderUpdateStatus = function(orderId, status, cb) {
    httpUtil.httpRequest(config.app.connection, config.methods.GET,
        '/commerce/order/'+ urlencode(orderId) + '/status/' + urlencode(status),
        {}
        , function (err, data) {
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
// ** Transaction
// **
exports.transactionCreate = function(orderId, transactionId, details, cb) {
    httpUtil.httpRequest(config.app.connection, config.methods.POST, '/commerce/transaction/create',
        {
            orderId: orderId,
            transactionId: transactionId,
            details: details
        }
        , function (err, data) {
            if (err) {
                return cb(err);
            }
            if (data.status !== 200) {
                return cb(data.body);
            }
            return cb(null, data.body);
        });
}

exports.transactionList = function(orderId, cb) {
    httpUtil.httpRequest(config.app.connection, config.methods.GET, '/commerce/transaction/list/order/' + urlencode(orderId), {}
        , function (err, data) {
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


/**
 * Schedule
 */

//Deprecated
exports.generateSchedule = function(productId,cb) {
  httpUtil.httpRequest(config.app.connection, config.methods.GET, '/commerce/schedule/generate/product/'+productId, {}, function (err, data) {
    if (err) {
      return cb(err);
    }
    if (data.status !== 200) {
      return cb(data.body);
    }
    return cb(null, data.body);
  });
};

exports.generateScheduleV2 = function(params,cb) {
  httpUtil.httpRequest(config.app.connection, config.methods.POST, '/commerce/schedule/generate', params, function (err, data) {
    if (err) {
      return cb(err);
    }
    if (data.status !== 200) {
      return cb(data.body);
    }
    return cb(null, data.body);
  });
};

exports.paymentsSchedule = function(params,cb) {
  httpUtil.httpRequest(config.app.connection, config.methods.GET, '/commerce/schedule/payments/order/'+params.orderId, {}, function (err, data) {
    if (err) {
      return cb(err);
    }
    if (data.status !== 200) {
      return cb(data.body);
    }
    return cb(null, data.body);
  });
};

exports.listRetryPayments = function(cb) {
  httpUtil.httpRequest(config.app.connection, config.methods.GET, '/commerce/order/retry/payments', {}, function (err, data) {
    if (err) {
      return cb(err);
    }
    if (data.status !== 200) {
      return cb(data.body);
    }
    return cb(null, data.body);
  });
};

exports.listOrdersComplete = function(cb) {
  httpUtil.httpRequest(config.app.connection, config.methods.GET, '/commerce/order/complete', {}, function (err, data) {
    if (err) {
      return cb(err);
    }
    if (data.status !== 200) {
      return cb(data.body);
    }
    return cb(null, data.body);
  });
};

exports.createOrderInvoice = function(orderId, cb) {
  httpUtil.httpRequest(config.app.connection, config.methods.GET, '/commerce/order/'+urlencode(orderId)+'/create/invoice', {}, function (err, data) {
    if (err) {
      return cb(err);
    }
    if (data.status !== 200) {
      return cb(data.body);
    }
    return cb(null, data.body);
  });
};