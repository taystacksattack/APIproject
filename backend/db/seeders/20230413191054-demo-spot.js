'use strict';

const {Spot, User} = require('../models')

let options = {}
if(process.env.NODE_ENV === 'production'){
  options.schema = process.env.SCHEMA
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    options.tableName = 'Spots'
   await queryInterface.bulkInsert(options, [
    {
      ownerId: 1,
      address: '123 Standard dr',
      city: 'Milwaukee',
      state: 'WI',
      country: 'USA',
      lat: 10.40,
      lng: 90.20,
      name: 'Cottage',
      description: 'Basic cottage by the lake.',
      price: 100.00
    },
    {
      ownerId: 2,
      address: '1234 Standard dr',
      city: 'Milwaukee',
      state: 'WI',
      country: 'USA',
      lat: 40.41,
      lng: 30.21,
      name: 'Cottage2',
      description: 'Cozy cabin by the lake.',
      price: 150.00
    },
    {
      ownerId: 3,
      address: '12345 Standard dr',
      city: 'Milwaukee',
      state: 'WI',
      country: 'USA',
      lat: 20.42,
      lng: 50.22,
      name: 'Cottage3',
      description: 'Luxury cabin by the lake.',
      price: 250.00
    }
  ], {});

  },

  async down (queryInterface, Sequelize) {
    options.tableName = 'Spots'
    await queryInterface.bulkDelete(options, null, {});
  }
};
