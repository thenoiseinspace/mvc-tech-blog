const { Comment } = require('../models');

const commentdata = [
    {
        comment_text: 'I don\'t think it had to do with firebending--I think it was more their colonialistic drive. Earthbenders had the potential for technological advancement but either did not need it, like in Omashu, or wanted to keep the lower classes down, like in Ba Sing Se.',
        user_id: 1,
        post_id: 1
    },
    {
        comment_text: 'Agreed--nonbenders use technology to level the playing field.',
        user_id: 2,
        post_id: 2
    },
    {
        comment_text: 'Only if the spirits agreed! If the tech was exploitational, there would have been wars between the humans and the spirits.',
        user_id: 3,
        post_id: 3
    }
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;