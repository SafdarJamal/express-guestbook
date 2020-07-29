const express = require('express');
const router = express.Router();

const Entry = require('../../models/Entry');
const { validateEntry } = require('../../validation');

router.get('/', (req, res) => res.render('pages/entries/new', { error: null }));

router.post('/', (req, res) => {
  const { name, email, comment } = req.body;

  const { error } = validateEntry(req.body);
  if (error) return res.status(400).render('pages/entries/new', { error });

  const entry = new Entry({ name, email, comment });

  entry
    .save()
    .then(data => res.redirect('/entries'))
    .catch(error => res.status(400).render('pages/entries/new', { error }));
});

module.exports = router;
