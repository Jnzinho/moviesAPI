const express = require('express');
const morgan = require('morgan');

const movieRouter = require('./routes/movieRoutes');

const app = express();

app.use(express.json());
app.use(morgan('dev'));

app.use('/movies', movieRouter);

module.exports = app;
