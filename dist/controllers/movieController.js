"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateMovie = exports.getMovies = exports.getMovie = exports.deleteMovie = exports.checkID = exports.addMovie = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _fs = _interopRequireDefault(require("fs"));
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var movies = JSON.parse(_fs["default"].readFileSync("".concat(__dirname, "/../../data/movies.json")));
var checkID = function checkID(req, res, next) {
  var id = req.params.id;
  if (id < 1 || id > movies.length) {
    return res.status(404).json({
      status: 'error',
      message: 'Id not found'
    });
  }
  next();
};
exports.checkID = checkID;
var getMovies = function getMovies(req, res) {
  res.status(200).json({
    status: 'success',
    results: movies.length,
    data: movies
  });
};
exports.getMovies = getMovies;
var addMovie = function addMovie(req, res) {
  var newID = movies[movies.length - 1].id + 1;
  var newMovie = Object.assign({
    id: newID
  }, req.body);
  movies.push(newMovie);
  _fs["default"].writeFile("".concat(__dirname, "/../data/movies.json"), JSON.stringify(movies), function (err) {
    res.status(201).json({
      status: 'success',
      data: {
        movie: newMovie
      }
    });
  });
};
exports.addMovie = addMovie;
var getMovie = function getMovie(req, res) {
  var id = req.params.id * 1;
  var movie = movies.find(function (el) {
    return el.id === id;
  });
  res.status(200).json({
    status: 'success',
    data: {
      movie: movie
    }
  });
};
exports.getMovie = getMovie;
var deleteMovie = function deleteMovie(req, res) {
  var id = req.params.id * 1;
  var movie = movies.find(function (el) {
    return el.id === id;
  });
  var updatedMovies = movies.filter(function (m) {
    return m.id !== movie.id;
  });
  _fs["default"].writeFile("".concat(__dirname, "/../data/movies.json"), JSON.stringify(updatedMovies), function (err) {
    res.status(204).send({
      status: 'success',
      data: null
    });
  });
};
exports.deleteMovie = deleteMovie;
var updateMovie = function updateMovie(req, res, next) {
  var id = req.params.id * 1;
  var movie = movies.find(function (movie) {
    return movie.id === id;
  });
  var updatedMovie = _objectSpread({
    id: id
  }, req.body);
  var updatedMovies = movies.map(function (m) {
    return m.id === updatedMovie.id ? updatedMovie : m;
  });
  _fs["default"].writeFile("".concat(__dirname, "/../data/movies.json"), JSON.stringify(updatedMovies), function (err) {
    res.status(200).json({
      status: 'success',
      data: updatedMovies
    });
  });
};
exports.updateMovie = updateMovie;