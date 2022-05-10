const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

// create our Post model
class Post extends Model {}

// create fields/columns for Post model
Post.init(
    {
        // id: {
        //     type: DataTypes.INTEGER,
        //     allowNull: false,
        //     primaryKey: true,
        //     autoIncrement: true, 
        // },

        // userID: {
        //     type: DataTypes.INTEGER,
        //     allowNull: false,
        //     foreignKey: true,
        //     references: {
        //         model: "user", 
        //         key: "id",
        //     }
        // },
        // postID: {
        //     type: DataTypes.INTEGER,
        //     allowNull: false,
        //     foreignKey: true,
        //     references: {
        //         model: "post", 
        //         key: "id",
        //     }
        // },
        // postText: {
        //     type: DataTypes.STRING,
        //     allowNull: false,
        },
    },
    {   
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'comment'
    }
);

module.exports = User;