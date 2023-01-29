const Sequelize = require('sequelize');
const config = require('../config/config.json');
const env = process.env.NODE_ENV || 'development';
const { dialect, storage } = config[env];

const db = new Sequelize('store', 'root', '', {
  dialect,
  storage
});

db.authenticate()
  .then(() => console.log('DB connection...'))
  .catch((err) => console.log(err));

module.exports = db;