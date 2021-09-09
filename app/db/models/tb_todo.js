'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tb_todo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.tb_user, {foreignKey: 'id_user'})
    }
  };
  tb_todo.init({
    id_todo: {
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    id_user: DataTypes.INTEGER,
    title: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'tb_todo',
  });
  return tb_todo;
};
