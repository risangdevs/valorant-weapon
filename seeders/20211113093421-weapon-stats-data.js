'use strict';

const fs = require("fs");

module.exports = {
  up:  (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     let insert=JSON.parse(fs.readFileSync('./data/weaponStat.json','utf-8'))
     insert.forEach(e=>{
       e.createdAt=new Date()
       e.updatedAt=new Date()
     })
     return queryInterface.bulkInsert('WeaponStats', insert)
  },

  down:  (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
