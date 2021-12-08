'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class mahasiswa extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      mahasiswa.belongsTo(models.kelas, {foreignKey: 'id_kelas', as: 'kelas'})
    }
  };
  mahasiswa.init({
    nim: DataTypes.STRING,
    nama: DataTypes.STRING,
    id_kelas: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'mahasiswa',
  });
  return mahasiswa;
};