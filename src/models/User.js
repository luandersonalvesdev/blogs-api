/**
 * 
 * @param {import('sequelize').Sequelize} sequelize 
 * @param {import('sequelize').DataTypes} DataTypes 
 */
const UserModel = (sequelize, DataTypes) => {
  const UserSchema = sequelize.define(
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

  UserSchema.associate = (models) => {
    UserSchema.hasMany(
      models.BlogPost,
      { foreignKey: 'id', as: 'blogPosts' }
    )
  }

  return UserSchema;
};

module.exports = UserModel;