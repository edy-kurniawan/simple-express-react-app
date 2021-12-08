'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class kelas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      kelas.hasMany(models.mahasiswa, {foreignKey: 'id_kelas', as: 'mahasiswa'})
    }
  };
  kelas.init({
    nama: DataTypes.STRING,
    keterangan: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'kelas',
  });
  return kelas;
};