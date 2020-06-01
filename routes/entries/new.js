const express = require('express');
const router = express.Router();

router.get('/', (req, res) => res.render('entries/new'));

router.post('/', (req, res) => {
  res.redirect('/entries');
});

module.exports = router;
