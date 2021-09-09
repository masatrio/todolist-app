'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class tb_attachment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.tb_todolist, { foreignKey: 'id_todolist' });
    }
  };
  tb_attachment.init({
    id_attachment: {
      primaryKey: true,
      autoIncrement: true,

      type: DataTypes.INTEGER,
    },
    url: DataTypes.STRING,
    caption: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'tb_attachment',
  });
  return tb_attachment;
};
