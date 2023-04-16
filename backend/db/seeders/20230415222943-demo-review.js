'use strict';


const bcrypt = require("bcryptjs")

let options = {}
if(process.env.NODE_ENV === 'production'){
  options.schema = process.env.SCHEMA
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    options.tableName = 'Reviews';
     await queryInterface.bulkInsert(options, [
      {
        spotId: 1,
        userId: 1,
        review: 'This place had a cool patio!',
        stars: 5
      },
      {
        spotId: 2,
        userId: 2,
        review: 'This place needed some work, but was cozy.',
        stars: 4
      },
      {
        spotId: 3,
        userId: 3,
        review: 'The owner was super comunicative!',
        stars: 5
      },
    ], {});

  },

  async down (queryInterface, Sequelize) {
    options.tableName = 'Reviews';
    await queryInterface.bulkDelete(options);

  }
};
