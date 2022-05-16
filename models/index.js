const User = require('./User');
const Comment = require('./Comment');
const Post = require('./Post');

User.hasMany(Comment, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
  constraints: false,
});

Comment.belongsTo(User, {
  foreignKey: 'user_id'
});

//user has many posts, post belong to user, post has many comments, comments belong to post, 

User.hasMany(Post, {
  foreignKey: "userID",
  constraints: false,
});

Post.belongsTo(User, {
	foreignKey: 'userID',
    constraints: false,
});

Post.hasMany(Comment, {
    foreignKey: "postID",
    constraints: false,
});

Comment.belongsTo(Post, {
	foreignKey: 'userID',
});

module.exports = { User, Comment, Post };