'use strict';

let options = {}
if(process.env.NODE_ENV === 'production'){
  options.schema = process.env.SCHEMA
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    options.tableName = 'ReviewImages'
    await queryInterface.bulkInsert(options, [
      {
        reviewId: 1,
        url: 'www.whatever.com'
      },
      {
        reviewId: 2,
        url: 'www.whatevers.com'
      },
      {
        reviewId: 3,
        url: 'www.whateverz.com'
      },
    ], {});

  },

  async down (queryInterface, Sequelize) {
    options.tableName = 'ReviewImages'
    await queryInterface.bulkDelete(options);

  }
};
