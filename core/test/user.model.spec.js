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
    token:'',
    gender: 'male',
    birthDate: '1987-07-29',
    label: 'label',
    type: 'telephone',
    valueContact: 'value',
    contactId:'',
    typeAddress: 'billing',
    labelAddress : 'label',
    address1 : 'address 1',
    address2 : 'address 2',
    city : 'city',
    state : 'state',
    country : 'country',
    zipCode : '00000',
    addressId: '',
    childId:'',
    typeRelation: 'child'
};

module.exports = data;