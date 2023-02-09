// const movieController = require('../controllers/movieController');
// import { movieController } from '../controllers/movieController';
import {
  checkID,
  getMovies,
  addMovie,
  getMovie,
  deleteMovie,
  updateMovie,
} from '../controllers/movieController';

// const express = require('express');
import express from 'express';

const router = express.Router();

router.param('id', checkID);

router.get('/', getMovies);

router.post('/', addMovie);

router.get('/:id', getMovie);

router.delete('/:id', deleteMovie);

router.put('/:id', updateMovie);

module.exports = router;
