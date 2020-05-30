const express = require('express');
const router = express.Router();

router.get('/', (req, res) => res.render('new-entry'));

router.post('/', (req, res) => {
  if (!req.body.title || !req.body.body)
    return res.status(400).send('Entries must have a title and a body.');

  entries.push({
    title: req.body.title,
    content: req.body.body,
    published: new Date()
  });

  res.redirect('/');
});

module.exports = router;
