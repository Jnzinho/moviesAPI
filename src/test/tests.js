import request from 'supertest';
import app from '../app';
import fs from 'fs';

const movies = JSON.parse(
  fs.readFileSync(`${__dirname}/../../data/movies.json`)
);

request(app)
  .get('/movies/10')
  .expect(200)
  .expect('Content-Type', 'application/json; charset=utf-8')
  .end((err, res) => {
    if (err) {
      throw err;
    } else {
      console.log('GET /MOVIES/ID - All Tests Succeded');
    }
  });

request(app)
  .get('/movies')
  .expect(200)
  .expect('Content-Type', 'application/json; charset=utf-8')
  .expect((res) => {
    if (!res.body.hasOwnProperty('status'))
      throw new Error('Expected "status" key!');
    if (!res.body.hasOwnProperty('data'))
      throw new Error('Expected "data" key!');
  })
  .end((err, res) => {
    if (err) {
      throw err;
    } else {
      console.log('GET /MOVIES - All Tests Succeded');
    }
  });

request(app)
  .post('/movies')
  .send({
    title: 'Test',
    year: '1988',
    runtime: '92',
    genres: ['Comedy', 'Fantasy'],
    director: 'Tim Burton',
    actors: 'Alec Baldwin, Geena Davis, Annie McEnroe, Maurice Page',
    plot: 'A couple of recently deceased ghosts contract the services of a "bio-exorcist" in order to remove the obnoxious new owners of their house.',
    posterUrl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMTUwODE3MDE0MV5BMl5BanBnXkFtZTgwNTk1MjI4MzE@._V1_SX300.jpg',
  })
  .set('Accept', 'application/json')
  .expect('Content-Type', 'application/json; charset=utf-8')
  .expect(201)
  .expect((res) => {
    if (!res.body.hasOwnProperty('data')) throw new Error('Expected Data KEY!');
  })
  .end((err, res) => {
    if (err) {
      throw err;
    } else {
      console.log('POST /MOVIES - All Tests Succeded');
    }
  });

request(app)
  .put('/movies/1')
  .send({
    id: 1,
    title: 'TEST PASSED',
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
      throw err;
    } else {
      console.log('PUT MOVIES/1 - All Tests Succeded');
    }
  });

const requestDelete = () => {
  request(app)
    .delete(`/movies/${movies.length + 1}`)
    .expect(204)
    .end((err, res) => {
      if (err) {
        throw err;
      } else {
        console.log(`DELETE /MOVIES/ID - All Tests Succeded`);
      }
    });
};

setTimeout(requestDelete, 5000);
