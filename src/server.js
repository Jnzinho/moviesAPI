// const app = require('./app');
import app from './app';

const port = 3000;
app.listen(port, () => {
  console.log(`api running or port ${port}`);
});
