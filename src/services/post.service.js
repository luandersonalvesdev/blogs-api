const { BlogPost, User, PostCategory, Category, sequelize } = require('../models');
const { newPostValidation, updatePostValidation } = require('../validation/postSchemaValidation');

const doingInsertTransaction = async (postData, payload) => {
  const { id: userId } = await User.findOne({ where: { email: payload.email } });
  const data = await sequelize.transaction(async (transaction) => {
    const { categoryIds, ...post } = postData;
    const publication = {
      ...post,
      userId,
      published: new Date(),
      updated: new Date(),
    };
    const { id } = await BlogPost.create(publication, { transaction });
    const promises = categoryIds.map(async (categoryId) => {
      await PostCategory.create({ postId: id, categoryId }, { transaction });
    });
    await Promise.all(promises);
    return { ...publication, id };
  });
  return data;
};

const insert = async (postData, payload) => {
  const { error } = newPostValidation.validate(postData);

  if (error) {
    const { message } = error;
    return { status: 400, data: { message } };
  }

  const data = await doingInsertTransaction(postData, payload);
  return { status: 201, data };
};

const getAll = async () => {
  const posts = await BlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });
  return { status: 200, data: posts };
};

const getById = async (postId) => {
  console.log(postId);
  const post = await BlogPost.findOne({
    where: { id: postId },
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });
  if (!post) return { status: 404, data: { message: 'Post does not exist' } };
  return { status: 200, data: post };
};

const update = async (id, postUpdates, userData) => {
  const { id: userId } = await User.findOne({ where: { email: userData.email } });
  if (userId !== Number(id)) return { status: 401, data: { message: 'Unauthorized user' } };

  const { error } = updatePostValidation.validate(postUpdates);
  if (error) return { status: 400, data: { message: error.message } };

  const updated = new Date();
  await BlogPost.update({ ...postUpdates, updated }, { where: { id } });
  const { data: postUpdated } = await getById(id);
  return { status: 200, data: postUpdated };
};

module.exports = {
  insert,
  getAll,
  getById,
  update,
};