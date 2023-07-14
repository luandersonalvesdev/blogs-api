/**
 * 
 * @param {import('sequelize').Sequelize} sequelize 
 * @param {import('sequelize').DataTypes} DataTypes 
 */
const CategoryModel = (sequelize, DataTypes) => {
  const CategorySchema = sequelize.define(
    'Category',
    {
      id: { type: DataTypes.INTEGER, primaryKey: true },
      name: DataTypes.STRING,
    },
    {
      tableName: 'categories',
      timestamps: false,
    },
  );

  return CategorySchema;
};

module.exports = CategoryModel;