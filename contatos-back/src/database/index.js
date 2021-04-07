const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const User = require('../models/User');
const Phone = require('../models/Phone');

const connection = new Sequelize(dbConfig);

User.init(connection);
Phone.init(connection);

User.associate(connection.models);
Phone.associate(connection.models);

module.exports = connection;