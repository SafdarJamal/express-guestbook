const express = require('express');
const router = express.Router();

const entriesRouter = require('./entries');
const newRouter = require('./new');

router.use('/', entriesRouter);
router.use('/new', newRouter);

module.exports = router;
