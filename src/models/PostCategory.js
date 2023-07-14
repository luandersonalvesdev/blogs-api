/**
 * 
 * @param {import('sequelize').Sequelize} sequelize 
 * @param {import('sequelize').DataTypes} DataTypes 
 */
const PostCategorySchema = (sequelize, DataTypes) => {
  const PostCategoryModel = sequelize.define(
    'PostCategory',
    {
      postId: { type: DataTypes.INTEGER, foreignKey: true, field: 'post_id' },
      categoryId: { type: DataTypes.INTEGER, foreignKey: true, field: 'category_id' },
    },
    {
      underscored: true,
      timestamps: false,
      tableName: 'posts_categories',
    },
  );

  PostCategoryModel.associate = ({ BlogPost, Category }) => {
    BlogPost.belongsToMany(
      Category,
      {
        foreignKey: 'postId',
        otherKey: 'categoryId',
        as: 'categories',
        through: PostCategoryModel,
      },
    );

    Category.belongsToMany(
      BlogPost,
      {
        foreignKey: 'categoryId',
        otherKey: 'postId',
        as: 'posts',
        through: PostCategoryModel,
      },
    );
  };

  return PostCategoryModel;
};

module.exports = PostCategorySchema;