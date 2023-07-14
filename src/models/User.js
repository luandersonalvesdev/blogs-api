/**
 * 
 * @param {import('sequelize').Sequelize} sequelize 
 * @param {import('sequelize').DataTypes} DataTypes 
 */
const UserSchema = (sequelize, DataTypes) => {
  const UserModel = sequelize.define(
    'User',
    {
      id: { type: DataTypes.INTEGER, primaryKey: true },
      displayName: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      image: DataTypes.STRING,
    },
    {
      timestamps: false,
      underscored: true,
      tableName: 'users',
    },
  );

  UserModel.associate = (models) => {
    UserModel.hasMany(
      models.BlogPost,
      { foreignKey: 'id', as: 'blogPosts' }
    )
  }

  return UserModel;
};

module.exports = UserSchema;