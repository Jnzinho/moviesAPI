"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _movieController = _interopRequireDefault(require("../controllers/movieController"));
var _express = _interopRequireDefault(require("express"));
// const movieController = require('../controllers/movieController');

// const express = require('express');

var router = _express["default"].Router();
router.param('id', _movieController["default"].checkID);
router.get('/', _movieController["default"].getMovies);
router.post('/', _movieController["default"].addMovie);
router.get('/:id', _movieController["default"].getMovie);
router["delete"]('/:id', _movieController["default"].deleteMovie);
router.put('/:id', _movieController["default"].updateMovie);
module.exports = router;