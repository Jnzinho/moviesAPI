"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _morgan = _interopRequireDefault(require("morgan"));
var _movieRoutes = _interopRequireDefault(require("./routes/movieRoutes"));
// const express = require('express');

// const movieRouter = require('./routes/movieRoutes');

var app = (0, _express["default"])();
app.use(_express["default"].json());
app.use((0, _morgan["default"])('dev'));
app.use('/movies', _movieRoutes["default"]);
var _default = app;
exports["default"] = _default;