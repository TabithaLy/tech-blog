// taken and modifie from UPENN-VIRT-FSF-FT-07-2022-U-LOLC\14-MVC\01-Activities\28-Stu_Mini-Project\Main\models\index.js
const User = require('./User');
const Post = require('./post');
const Comment = require('./comment');

User.hasMany(Post, {
  foreignKey: 'user_id',
});

Post.belongsTo(User, {
  foreignKey: 'user_id'
});

User.hasMany(Comment, {
    foreignKey: 'user_id',
});

Comment.belongsTo(User, {
    foreignKey: 'user_id'
});

Comment.belongsTo(Post, {
    foreignKey: 'user_id'
});

Post.hasMany(Comment, {
    foreignKey: 'user_id'
});

module.exports = { User, Post, Comment };