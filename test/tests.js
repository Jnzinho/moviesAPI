const request = require('supertest');
const assert = require('assert');
const fs = require('fs');

const movies = JSON.parse(fs.readFileSync(`${__dirname}/../data/movies.json`));

// mudar toda vez que for testar, se não o filme já estará deletado e resultará em código 404 ou 500
const movieToBeDeleted = 242;

const testDelete = function () {
  describe(`DELETE /movies/id`, function () {
    it('IT should have a status code 204', function (done) {
      request('http://localhost:3000')
        .delete(`/movies/${movieToBeDeleted}`)
        .expect(204)
        .end((err, res) => {
          if (err) {
            done(err);
          } else {
            done();
          }
        });
    });
  });
};

describe('GET /movies', function () {
  it('It should have status code 200', function (done) {
    request('http://localhost:3000')
      .get('/movies')
      .expect(200)
      .expect('Content-Type', 'application/json; charset=utf-8')
      .end((err, res) => {
        if (err) {
          done(err);
        } else {
          done();
        }
      });
  });
});

describe('GET /movies/id', function () {
  it('It should have status code 200', function (done) {
    request('http://localhost:3000')
      .get('/movies/2')
      .expect(200)
      .expect('Content-Type', 'application/json; charset=utf-8')
      .end((err, res) => {
        if (err) {
          done(err);
        } else {
          done();
        }
      });
  });
});

describe('POST /movies', function () {
  it('It should have a status code 201', function (done) {
    request('http://localhost:3000')
      .post('/movies')
      .send({
        title: 'MOCHA Test',
        year: '1988',
        runtime: '92',
        genres: ['Comedy', 'Fantasy'],
        director: 'Tim Burton',
        actors: 'Alec Baldwin, Geena Davis, Annie McEnroe, Maurice Page',
        plot: 'A couple of recently deceased ghosts contract the services of a "bio-exorcist" in order to remove the obnoxious new owners of their house.',
        posterUrl:
          'https://images-na.ssl-images-amazon.com/images/M/MV5BMTUwODE3MDE0MV5BMl5BanBnXkFtZTgwNTk1MjI4MzE@._V1_SX300.jpg',
      })
      .expect(201)
      .expect('Content-Type', 'application/json; charset=utf-8')
      .expect((res) => {
        if (!res.body.hasOwnProperty('data'))
          throw new Error('Expected Data KEY!');
      })
      .end((err, res) => {
        if (err) {
          done(err);
        } else {
          done();
        }
      });
  });
});

describe('PUT /movies/id', function () {
  it('IT should have a status code 200', function (done) {
    request('http://localhost:3000')
      .put('/movies/1')
      .send({
        id: 1,
        title: 'MOCHA TEST',
        year: '1990',
        runtime: '92',
        genres: ['Comedy', 'Fantasy'],
        director: 'Tim Burton',
        actors: 'Alec Baldwin, Geena Davis, Annie McEnroe, Maurice Page',
        plot: 'A couple of recently deceased ghosts contract the services of a "bio-exorcist" in order to remove the obnoxious new owners of their house.',
        posterUrl:
          'https://images-na.ssl-images-amazon.com/images/M/MV5BMTUwODE3MDE0MV5BMl5BanBnXkFtZTgwNTk1MjI4MzE@._V1_SX300.jpg',
      })
      .expect(200)
      .expect('Content-Type', 'application/json; charset=utf-8')
      .expect((res) => {
        if (!res.body.data) throw new Error('Expected Data KEY!');
      })
      .end((err, res) => {
        if (err) {
          done(err);
        } else {
          done();
        }
      });
  });
});

setTimeout(testDelete, 2000);
