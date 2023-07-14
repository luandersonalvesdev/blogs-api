/**
 * 
 * @param {import('sequelize').Sequelize} sequelize 
 * @param {import('sequelize').DataTypes} DataTypes 
 */
const CategorySchema = (sequelize, DataTypes) => {
  const CategoryModel = sequelize.define(
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

  return CategoryModel;
};

module.exports = CategorySchema;