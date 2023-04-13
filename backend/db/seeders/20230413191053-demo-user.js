'use strict';

const bcrypt = require("bcryptjs")

let options = {}
if(process.env.NODE_ENV === 'production'){
  options.schema = process.env.SCHEMA
}



const demoUser = [
  {
    username: 'testUserName',
    email: 'test@gmail.com',
    hashedPassword: 'testPassword'
}
]

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize)=> {
   options.tableName = 'Users';
   return queryInterface.bulkInsert(options,[
    {
      username: 'Demo-lition',
      email: 'test@gmail.com',
      hashedPassword: bcrypt.hashSync('password'),
      firstName: 'James',
      lastName: 'Bond'
    },
    {
      email: 'demo@user.io',
      username: 'Demo-licious',
      hashedPassword: bcrypt.hashSync('password2'),
      firstName: 'Janes',
      lastName: 'Bond'
    },
    {
      email: 'user1@user.io',
      username: 'FakeUser1',
      hashedPassword: bcrypt.hashSync('password2'),
      firstName: 'Lames',
      lastName: 'Bond'
    },
  ], {});
},

  down: async(queryInterface, Sequelize)=> {
    options.tableName = 'Users';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options,{
      username: { [Op.in]: ['testUserName', 'Demo-licious', 'FakeUser1']}
    })
  }
};
