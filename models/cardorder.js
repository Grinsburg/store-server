'use strict';
const { Model } = require('sequelize');
const { DataTypes } = require('sequelize');
const db = require('../database/config');

const cardorders = db.define(
    'cardorders',
    {
        id: {
            type: DataTypes.STRING,
            primaryKey: true,
        },
        name: DataTypes.STRING,
        code: DataTypes.STRING,
        brand: DataTypes.STRING,
        weight: DataTypes.STRING,
        height: DataTypes.STRING,
        width: DataTypes.STRING,
        vendorCode: DataTypes.STRING,
        country: DataTypes.STRING,
        purchasePrice: DataTypes.STRING,
        sellPrice: DataTypes.STRING,
        length: DataTypes.STRING,
        group: DataTypes.STRING,
    },
    {}
);

module.exports = {
    cardorders,
};
