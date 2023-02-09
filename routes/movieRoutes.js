const movieController = require('../controllers/movieController');

const express = require('express');

const router = express.Router();

router.param('id', movieController.checkID);

router.get('/', movieController.getMovies);

router.post('/', movieController.addMovie);

router.get('/:id', movieController.getMovie);

router.delete('/:id', movieController.deleteMovie);

router.put('/:id', movieController.updateMovie);

module.exports = router;
