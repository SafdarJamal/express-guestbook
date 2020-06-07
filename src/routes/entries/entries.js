const express = require('express');
const router = express.Router();

const Entry = require('../../models/Entry');

router.get('/', (req, res) => {
  Entry.find({})
    .then(entries => {
      entries.reverse();
      res.status(200).render('pages/entries', { entries, error: null });
    })
    .catch(error => res.status(400).render('entries', { entries: [], error }));
});

module.exports = router;
