const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
    {
        username: 'fireferretsrule29',
        email: 'flameo0@hotman.com',
        password: 'password123'
    },
    {
        username: 'TheBoulderIsNoLongerConflicted',
        email: 'rockemsockem@rockrus.com',
        password: 'password1234'
    },
    {
        username: 'Zukosh0n0r',
        email: 'irohhasit@teashop.com',
        password: 'password1235'
    }
];

const seedUsers = () => User.bulkCreate(userdata, { individualHooks: true });

module.exports = seedUsers;