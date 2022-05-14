const User = require('./User');
const Comment = require('./Comment');
const Post = require('./Post');

User.hasMany(Comment, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Comment.belongsTo(User, {
  foreignKey: 'user_id'
});

//user has many posts, post belong to user, post has many comments, comments belong to post, 

User.hasMany(Post, {});

Post.belongsTo(User, {
	foreignKey: 'userId',
});

Post.hasMany(Comment, {});

Comment.belongsTo(Post, {
	foreignKey: 'userId',
});

module.exports = { User, Comment, Post };