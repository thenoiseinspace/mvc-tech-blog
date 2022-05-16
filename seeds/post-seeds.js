const { Post } = require('../models');

const postdata = [
    {
        title: 'Technology of the Fire Nation',
        description: 'Before the invention of metalbending, firebenders were the best equipped to work with metal. This is what gave them their edge when it comes to inventions like the drill used at Ba Sing Se.',
        user_id: 1
    },
    {
        title: 'Benders vs Nonbenders',
        description: 'Most of the good technology in Avatar world comes from non-benders. In ATLA, just look at Sokka and the group of inventors that moves into the abandoned air temple. In Korra, look at Asami and Verrick.',
        user_id: 2
    },
    {
        title: 'If Wan had never shut off the spirit world, would we have spirit-powered tech?',
        description: 'We see in season four of LOK that spirit vines hold enormous amounts of potential energy. If humans and spirits had been allowed to evolve together, would the humans have invented spirit-powered tech?',
        user_id: 3
    }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;