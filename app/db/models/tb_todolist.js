'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tb_todolist extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.tb_todo, { foreignKey: 'id_todo' }),
      this.belongsTo(models.tb_status, { foreignKey: 'id_status' });
      // define association here
    }
  };
  tb_todolist.init({
    id_todolist:{
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    id_todo: {
      foreignKey: true,
      type: DataTypes.INTEGER
    },
    task: DataTypes.STRING,
    id_status: {
      foreignKey: true,
      type: DataTypes.INTEGER
    },
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'tb_todolist',
  });
  return tb_todolist;
};
