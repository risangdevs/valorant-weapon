'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Weapon extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Weapon.hasOne(models.WeaponStat,{foreignKey:'weaponid'})
    }
  };
  Weapon.init({
    displayName: DataTypes.STRING,
    category: DataTypes.STRING,
    displayIcon: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Weapon',
  });
  return Weapon;
};