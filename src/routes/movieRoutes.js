// const movieController = require('../controllers/movieController');
import movieController from '../controllers/movieController';

// const express = require('express');
import express from 'express';

const router = express.Router();

router.param('id', movieController.checkID);

router.get('/', movieController.getMovies);

router.post('/', movieController.addMovie);

router.get('/:id', movieController.getMovie);

router.delete('/:id', movieController.deleteMovie);

router.put('/:id', movieController.updateMovie);

module.exports = router;
