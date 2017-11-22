import express from 'express';
import morgan from 'morgan';

const app = express();

app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.send('Hello, World.');
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`listen http://localhost:${PORT}`)
});
