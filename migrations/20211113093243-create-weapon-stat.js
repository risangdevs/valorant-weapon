'use strict';
module.exports = {
  up:  (queryInterface, Sequelize) => {
    return queryInterface.createTable('WeaponStats', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      displayName: {
        type: Sequelize.STRING
      },
      fireRate: {
        type: Sequelize.FLOAT
      },
      magazineSize: {
        type: Sequelize.FLOAT
      },
      runSpeedMultiplier: {
        type: Sequelize.FLOAT
      },
      reloadTime: {
        type: Sequelize.FLOAT
      },
      equipTime: {
        type: Sequelize.FLOAT
      },
      accuracy: {
        type: Sequelize.FLOAT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down:  (queryInterface, Sequelize) => {
    return queryInterface.dropTable('WeaponStats');
  }
};