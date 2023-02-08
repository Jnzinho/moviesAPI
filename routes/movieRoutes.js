const movieController = require('../controllers/movieController');

const express = require('express');

const router = express.Router();

router.get('/', movieController.getMovies);

module.exports = router;
