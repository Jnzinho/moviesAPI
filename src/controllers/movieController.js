import fs from 'fs';

const movies = JSON.parse(
  fs.readFileSync(`${__dirname}/../../data/movies.json`)
);

export const checkID = (req, res, next) => {
  const id = req.params.id;
  if (id < 1 || id > movies.length) {
    return res.status(404).json({
      status: 'error',
      message: 'Id not found',
    });
  }
  next();
};

export const getMovies = (req, res) => {
  res.status(200).json({
    status: 'success',
    results: movies.length,
    data: movies,
  });
};

export const addMovie = (req, res) => {
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

export const getMovie = (req, res) => {
  const id = req.params.id * 1;
  const movie = movies.find((el) => el.id === id);
  res.status(200).json({
    status: 'success',
    data: {
      movie: movie,
    },
  });
};

export const deleteMovie = (req, res) => {
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

export const updateMovie = (req, res, next) => {
  const id = req.params.id * 1;
  const movie = movies.find((movie) => movie.id === id);
  const updatedMovie = { id, ...req.body };
  const updatedMovies = movies.map((m) =>
    m.id === updatedMovie.id ? updatedMovie : m
  );
  fs.writeFile(
    `${__dirname}/../data/movies.json`,
    JSON.stringify(updatedMovies),
    (err) => {
      res.status(200).json({
        status: 'success',
        data: updatedMovies,
      });
    }
  );
};
