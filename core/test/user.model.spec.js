'use strict';
var faker = require('faker');

var data = {
    userId:'',
    email:faker.internet.email(),
    firstName : faker.name.firstName(),
    lastName : faker.name.lastName(),
    fullName : function(){
        return this.firstName + ' ' + this.lastName;
    },
    password : 'Querty1!',
    token:''
};

module.exports = data;