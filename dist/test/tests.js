"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _supertest = _interopRequireDefault(require("supertest"));
var _app = _interopRequireDefault(require("../app"));
var _fs = _interopRequireDefault(require("fs"));
var movies = JSON.parse(_fs["default"].readFileSync("".concat(__dirname, "/../../data/movies.json")));
(0, _supertest["default"])(_app["default"]).get('/movies/10').expect(200).expect('Content-Type', 'application/json; charset=utf-8').end(function (err, res) {
  if (err) {
    throw err;
  } else {
    console.log('GET /MOVIES/ID - All Tests Succeded');
  }
});
(0, _supertest["default"])(_app["default"]).get('/movies').expect(200).expect('Content-Type', 'application/json; charset=utf-8').expect(function (res) {
  if (!res.body.hasOwnProperty('status')) throw new Error('Expected "status" key!');
  if (!res.body.hasOwnProperty('data')) throw new Error('Expected "data" key!');
}).end(function (err, res) {
  if (err) {
    throw err;
  } else {
    console.log('GET /MOVIES - All Tests Succeded');
  }
});
(0, _supertest["default"])(_app["default"]).post('/movies').send({
  title: 'Test',
  year: '1988',
  runtime: '92',
  genres: ['Comedy', 'Fantasy'],
  director: 'Tim Burton',
  actors: 'Alec Baldwin, Geena Davis, Annie McEnroe, Maurice Page',
  plot: 'A couple of recently deceased ghosts contract the services of a "bio-exorcist" in order to remove the obnoxious new owners of their house.',
  posterUrl: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTUwODE3MDE0MV5BMl5BanBnXkFtZTgwNTk1MjI4MzE@._V1_SX300.jpg'
}).set('Accept', 'application/json').expect('Content-Type', 'application/json; charset=utf-8').expect(201).expect(function (res) {
  if (!res.body.hasOwnProperty('data')) throw new Error('Expected Data KEY!');
}).end(function (err, res) {
  if (err) {
    throw err;
  } else {
    console.log('POST /MOVIES - All Tests Succeded');
  }
});
(0, _supertest["default"])(_app["default"]).put('/movies/1').send({
  id: 1,
  title: 'TEST PASSED',
  year: '1990',
  runtime: '92',
  genres: ['Comedy', 'Fantasy'],
  director: 'Tim Burton',
  actors: 'Alec Baldwin, Geena Davis, Annie McEnroe, Maurice Page',
  plot: 'A couple of recently deceased ghosts contract the services of a "bio-exorcist" in order to remove the obnoxious new owners of their house.',
  posterUrl: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTUwODE3MDE0MV5BMl5BanBnXkFtZTgwNTk1MjI4MzE@._V1_SX300.jpg'
}).expect(200).expect('Content-Type', 'application/json; charset=utf-8').expect(function (res) {
  if (!res.body.data) throw new Error('Expected Data KEY!');
}).end(function (err, res) {
  if (err) {
    throw err;
  } else {
    console.log('PUT MOVIES/1 - All Tests Succeded');
  }
});
var requestDelete = function requestDelete() {
  (0, _supertest["default"])(_app["default"])["delete"]("/movies/".concat(movies.length + 1)).expect(204).end(function (err, res) {
    if (err) {
      throw err;
    } else {
      console.log("DELETE /MOVIES/ID - All Tests Succeded");
    }
  });
};
setTimeout(requestDelete, 5000);