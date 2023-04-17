'use strict';
const { Model, Validator } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.belongsToMany(models.Spot,{
        through: models.Booking,
        foreignKey: 'userId',
        otherKey: 'spotId'
      })
      User.hasMany(models.Spot,{
        foreignKey: 'ownerId'
      })
      User.belongsToMany(models.Spot,{
        through:models.Review,
        foreignKey: 'userId',
        otherKey: 'spotId'
      })
    }
  }
  User.init({
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate:{
        len: [4,30],
        isNotEmail(value){
          if(Validator.isEmail(value)){
            throw new Error('Cannot be an email.')
          }
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate:{
        len: [3,256],
        isEmail:true
      }
    },
    firstName:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    hashedPassword: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        len: [60,60]
      }
    },
  }, {
    sequelize,
    modelName: 'User',
    defaultScope:{
      attributes:{
        exclude: ['email', 'hashedPassword', 'updatedAt', 'createdAt']
      }
    }
  });
  return User;
};
