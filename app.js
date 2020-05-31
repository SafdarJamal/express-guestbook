const express = require('express');
const path = require('path');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const newEntryRouter = require('./routes/new-entry');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const entries = [];
app.locals.entries = entries;

app.use('/', indexRouter);
app.use('/new-entry', newEntryRouter);

app.use((req, res) => res.status(404).render('404'));

module.exports = app;
