const fs = require('fs');
const { nextTick } = require('process');

const movies = JSON.parse(fs.readFileSync(`${__dirname}/../data/movies.json`));

exports.getMovies = (req, res) => {
  res.status(200).json({
    status: 'success',
    results: movies.length,
    data: movies,
  });
};

exports.addMovie = (req, res) => {
  const newID = movies[movies.length - 1].id + 1;
  const newMovie = Object.assign({ id: newID }, req.body);
  movies.push(newMovie);

  fs.writeFile(
    `${__dirname}/../data/movies.json`,
    JSON.stringify(movies),
    (err) => {
      res.status(201).json({
        status: 'success',
        data: {
          movie: newMovie,
        },
      });
    }
  );
};

exports.getMovie = (req, res) => {
  const id = req.params.id * 1;
  const movie = movies.find((el) => el.id === id);
  console.log(movie);
  res.status(200).json({
    status: 'success',
    data: {
      movie: movie,
    },
  });
};

exports.deleteMovie = (req, res) => {
  const id = req.params.id * 1;
  const movie = movies.find((el) => el.id === id);

  const updatedMovies = movies.filter((m) => m.id !== movie.id);
  fs.writeFile(
    `${__dirname}/../data/movies.json`,
    JSON.stringify(updatedMovies),
    (err) => {
      res.status(204).send({
        status: 'success',
        data: null,
      });
    }
  );
};
