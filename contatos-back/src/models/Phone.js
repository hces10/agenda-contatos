const {Model, DataTypes} = require('sequelize');

class Phone extends Model {
  static init(sequelize) {
    super.init({
      number: DataTypes.STRING,
      type: DataTypes.STRING,
    }, { sequelize, paranoid: true })
  }
  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'userId', as: 'user' });
  }
};



module.exports = Phone;