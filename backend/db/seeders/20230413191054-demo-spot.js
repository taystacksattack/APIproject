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
      address: '123 filler data ln',
      city: 'Milwaukee',
      state: 'WI',
      country: 'USA',
      lat: 10.40,
      lng: 90.20,
      name: 'Affordable Apartment!',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      price: 40.00
    },
    {
      ownerId: 2,
      address: '1234 Standard dr',
      city: 'Also Milwaukee',
      state: 'MA',
      country: 'USA',
      lat: 40.41,
      lng: 30.21,
      name: 'Cute Place',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      price: 50.00
    },
    {
      ownerId: 3,
      address: '6547 Dreary Ln',
      city: 'Seattle',
      state: 'WA',
      country: 'USA',
      lat: 20.42,
      lng: 50.22,
      name: 'Rainy Day House',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      price: 65.00
    },
    {
      ownerId: 2,
      address: '2233 Wassup Ln',
      city: 'Kansas City',
      state: 'MO',
      country: 'USA',
      lat: 10.40,
      lng: 90.20,
      name: '100% THAT SPOT',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      price: 74.00
    },
    {
      ownerId: 3,
      address: '678 Curmudgeon Ave',
      city: 'Camden',
      state: 'LA',
      country: 'USA',
      lat: 40.41,
      lng: 30.21,
      name: 'Bayou Bonanza',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      price: 65.00
    },
    {
      ownerId: 1,
      address: '568 Charcoal ln',
      city: 'Montreal',
      state: 'Québec',
      country: 'Canada',
      lat: 20.42,
      lng: 50.22,
      name: 'La Jolie Folle',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      price: 70.00
    },
    {
      ownerId: 2,
      address: '16 Candles pl',
      city: 'Los Angeles',
      state: 'NY',
      country: 'USA',
      lat: 10.40,
      lng: 90.20,
      name: 'Somewhere in Between',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      price: 50.00
    },
    {
      ownerId: 3,
      address: '2121  Standard dr',
      city: 'Trogolite',
      state: 'FL',
      country: 'USA',
      lat: 40.41,
      lng: 30.21,
      name: 'Yup, Florida',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      price: 46.00
    },
    {
      ownerId: 3,
      address: '9386 Fuchsia pl',
      city: 'Des Moines',
      state: 'VA',
      country: 'USA',
      lat: 20.42,
      lng: 50.22,
      name: 'Mt Whateverest',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      price: 38.00
    },
    {
      ownerId: 1,
      address: '7522 Brie Space',
      city: 'Butte',
      state: 'MT',
      country: 'USA',
      lat: 10.40,
      lng: 90.20,
      name: 'Cottage Cheese',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      price: 15.00
    },
    {
      ownerId: 2,
      address: '1789 Charchar st',
      city: 'Charlotte',
      state: 'NC',
      country: 'USA',
      lat: 40.41,
      lng: 30.21,
      name: 'Hometown Flavor',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      price: 84.00
    },
    {
      ownerId: 3,
      address: '12345 Standard dr',
      city: 'Atlanta',
      state: 'GA',
      country: 'USA',
      lat: 20.42,
      lng: 50.22,
      name: 'Fancy Pants',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      price: 46.00
    },
    {
      ownerId: 1,
      address: '1515 Felicity ln',
      city: 'Chicago',
      state: 'IL',
      country: 'USA',
      lat: 10.40,
      lng: 90.20,
      name: 'Dishy Deep Dish',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      price: 63.00
    },
    {
      ownerId: 2,
      address: '9624 Fandango ln',
      city: 'Washington',
      state: 'DC',
      country: 'USA',
      lat: 40.41,
      lng: 30.21,
      name: 'Fandango Tango',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      price: 58.00
    },
    {
      ownerId: 3,
      address: '632 Sandman lane',
      city: 'Palo Alto',
      state: 'TX',
      country: 'USA',
      lat: 20.42,
      lng: 50.22,
      name: 'Love in the time of Cottage',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      price: 53.00
    },
    {
      ownerId: 1,
      address: '641 Charming Hwy',
      city: 'Detroit',
      state: 'MI',
      country: 'USA',
      lat: 10.40,
      lng: 90.20,
      name: 'Special Sauce',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      price: 41.00
    },
    {
      ownerId: 2,
      address: '6149 Superficial hwy',
      city: 'Laborious',
      state: 'SC',
      country: 'USA',
      lat: 40.41,
      lng: 30.21,
      name: 'Coolidge Ridge',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      price: 67.00
    }
  ], {});

  },

  async down (queryInterface, Sequelize) {
    options.tableName = 'Spots'
    await queryInterface.bulkDelete(options, null, {});
  }
};
