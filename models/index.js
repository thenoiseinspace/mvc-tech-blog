const User = require('./User');
const Comment = require('./comment');
//const post

User.hasMany(Comment, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Comment.belongsTo(User, {
  foreignKey: 'user_id'
});

//user has many posts, post belong to user, post has many comments, comments belong to post, 

module.exports = { User, Comment };
//export post as well

//capitalize file name and class name but only for models 