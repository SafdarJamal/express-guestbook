const mongoose = require('mongoose');

const EntrySchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  comment: {
    type: String,
    required: true
  },
  date: {
    type: String,
    default: Date.now
  }
});

module.exports = mongoose.model('Entries', EntrySchema);
