'use strict';
let options = {}
if(process.env.NODE_ENV === 'production'){
  options.schema = process.env.SCHEMA
}
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    options.tableName = 'SpotImages'
    await queryInterface.bulkInsert(options, [
      {
        spotId: 1,
        url: 'www.whatever.com',
        preview: true,
      },
      {
        spotId: 2,
        url: 'www.whatevers.com',
        preview: false,
      },
      {
        spotId: 3,
        url: 'www.whateverz.com',
        preview: false,
      },
    ], {});

  },

  async down (queryInterface, Sequelize) {
    options.tableName = 'SpotImages'
    await queryInterface.bulkDelete(options);
  }
};
