const fs = require('fs');

const movies = JSON.parse(fs.readFileSync(`${__dirname}/../data/movies.json`));

exports.getMovies = (req, res) => {
  res.status(200).json({
    status: 'success',
    results: movies.length,
    data: movies,
  });
};
