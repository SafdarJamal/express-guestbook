const express = require('express');
const router = express.Router();

const newRouter = require('./new');

router.get('/', (req, res) => res.render('entries'));
router.use('/new', newRouter);

module.exports = router;
