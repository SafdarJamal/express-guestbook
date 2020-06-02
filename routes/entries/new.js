const express = require('express');
const router = express.Router();

const Entry = require('../../models/Entry');

router.get('/', (req, res) => res.render('entries/new'));

router.post('/', (req, res) => {
  const { name, email, comment } = req.body;

  const entry = new Entry({ name, email, comment });

  entry
    .save()
    .then(data => res.status(200).redirect('/entries'))
    .catch(error => res.status(400).send({ message: error.message }));
});

module.exports = router;
