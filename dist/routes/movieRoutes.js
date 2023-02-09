"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _movieController = require("../controllers/movieController");
var _express = _interopRequireDefault(require("express"));
// const movieController = require('../controllers/movieController');
// import { movieController } from '../controllers/movieController';

// const express = require('express');

var router = _express["default"].Router();
router.param('id', _movieController.checkID);
router.get('/', _movieController.getMovies);
router.post('/', _movieController.addMovie);
router.get('/:id', _movieController.getMovie);
router["delete"]('/:id', _movieController.deleteMovie);
router.put('/:id', _movieController.updateMovie);
module.exports = router;