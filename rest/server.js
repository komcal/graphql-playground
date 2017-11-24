import express from 'express';
import morgan from 'morgan';
import { idols, groups } from '../database';

const app = express();

app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.send('Hello, World.');
});

app.get('/groups', (req, res) => {
  res.json(groups);
});

app.get('/groups/:id', (req, res) => {
  const { id } = req.params;
  const group = groups.find(group => group.id === id);
  res.json(group);
});

app.get('/idols', (req, res) => {
  res.json(idols);
});

app.get('/idols/:id', (req, res) => {
  const { id } = req.params;
  const idol = idols.find(idol => idol.id === id);
  res.json(idol);
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`listen http://localhost:${PORT}`)
});
