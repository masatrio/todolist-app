'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tb_status extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }

    toJSON(){
      return  {
        ...this.get(), createdAt: undefined, updatedAt: undefined
      };
    }
  };
  tb_status.init({
    id_status: {
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    name: DataTypes.STRING
  }, {
    sequelize,

    modelName: 'tb_status',
  });
  return tb_status;
};
