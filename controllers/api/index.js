const router = require('express').Router();
const userRoutes = require('./userRoutes.js');
const apiRoutes = require('./api/');

const homeRoutes = require('./homeRoutes.js');
const dashboardRoutes = require('./dashboardRoutes.js');


//create these two
const postRoutes = require('./postRoutes.js');
const commentRoutes = require('./commentRoutes');

router.use('/users', userRoutes);
router.use('/posts', projectRoutes);
router.use('/comments', projectRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/', homeRoutes);

module.exports = router;


