'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class WeaponStat extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Foo.hasOne(Bar, {
      //   foreignKey: 'myFooId'
      // });
      // Bar.belongsTo(Foo);
      // define association here
      // models.Weapon.hasOne(WeaponStat,{
      //   foreignKey: 'id'
      // })
      // WeaponStat.belongsTo(models.Weapon)
    }
  };
  WeaponStat.init({
    displayName: DataTypes.STRING,
    fireRate: DataTypes.FLOAT,
    magazineSize: DataTypes.FLOAT,
    runSpeedMultiplier: DataTypes.FLOAT,
    reloadTime: DataTypes.FLOAT,
    equipTime: DataTypes.FLOAT,
    accuracy: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'WeaponStat',
  });
  return WeaponStat;
};