'use strict';

const bcrypt = require("bcryptjs")

let options = {}
if(process.env.NODE_ENV === 'production'){
  options.schema = process.env.SCHEMA
}



/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    options.tableName = 'Bookings';
    await queryInterface.bulkInsert(options, [
      {
        spotId: 1,
        userId: 1,
        startDate: new Date('2023-06-06'),
        endDate: new Date('2023-06-26')
      },
      {
        spotId: 2,
        userId: 2,
        startDate: new Date('2023-06-06'),
        endDate: new Date('2023-06-26')
      },
      {
        spotId: 3,
        userId: 3,
        startDate: new Date('2023-06-06'),
        endDate: new Date('2023-06-26')
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    options.tableName = 'Bookings';
    await queryInterface.bulkDelete(options)
  }
};
