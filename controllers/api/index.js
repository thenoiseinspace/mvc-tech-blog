const router = require('express').Router();

const userRoutes = require('./userRoutes');
const postRoutes = require('./postRoutes');
const commentRoutes = require('./commentRoutes');
const apiRoutes = require('./api/user-routes');
const homeRoutes = require('./home-routes');
// console.log(userRoutes)

router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/comments', commentRoutes);
router.use('/api', apiRoutes);
router.use('/', homeRoutes);

module.exports = router;
