const router = require('express').Router();

const apiRoutes = require('./api/burger_routes');
const htmlRoutes = require('./html/html_routes');

router.use('/api', apiRoutes);
router.use('/', htmlRoutes);

module.exports = router;