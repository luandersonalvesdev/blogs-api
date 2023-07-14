/**
 * 
 * @param {import('sequelize').Sequelize} sequelize 
 * @param {import('sequelize').DataTypes} DataTypes 
 */
const BlogPostModel = (sequelize, DataTypes) => {
  const BlogPostSchema = sequelize.define(
    'BlogPost',
    {
      id: { type: DataTypes.INTEGER, primaryKey: true },
      title: DataTypes.STRING,
      content: DataTypes.STRING,
      userId: {type: DataTypes.INTEGER, foreignKey: true},
      published: DataTypes.DATE,
      updated: DataTypes.DATE,
    },
    {
      underscored: true,
      timestamps: false,
      tableName: 'blog_posts',
    }
  );

  BlogPostSchema.associate = (models) => {
    BlogPostSchema.belongsTo(
      models.User,
      { foreignKey: 'userId', as: 'user' }
    )
  }

  return BlogPostSchema;
};

module.exports = BlogPostModel;