'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tb_user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.tb_role, {
        foreignKey: 'id_role'
      });
    }
  }
  tb_user.init({
    id_user: {
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    fullname: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    id_role: {
      foreignKey: true,
      type: DataTypes.INTEGER,
    },
    forgot_password: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'tb_user',
  });
  return tb_user;
};
