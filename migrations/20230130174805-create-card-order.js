'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('CardOrders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      },
      code: {
        type: Sequelize.STRING
      },
      brand: {
        type: Sequelize.STRING
      },
      weight: {
        type: Sequelize.STRING
      },
      height: {
        type: Sequelize.STRING
      },
      width: {
        type: Sequelize.STRING
      },
      vendorCode: {
        type: Sequelize.STRING
      },
      country: {
        type: Sequelize.STRING
      },
      purchasePrice: {
        type: Sequelize.STRING
      },
      sellPrice: {
        type: Sequelize.STRING
      },
      length: {
        type: Sequelize.STRING
      },
      group: {
        type: Sequelize.STRING
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('CardOrders');
  }
};