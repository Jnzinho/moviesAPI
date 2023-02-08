const fs = require('fs');

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
