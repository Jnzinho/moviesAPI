// const express = require('express');
import express from 'express';
import morgan from 'morgan';

// const movieRouter = require('./routes/movieRoutes');
import movieRouter from './routes/movieRoutes';

const app = express();

app.use(express.json());
app.use(morgan('dev'));

app.use('/movies', movieRouter);

export default app;
