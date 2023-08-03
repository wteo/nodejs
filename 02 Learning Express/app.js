import express from 'express';
import bodyParser from 'body-parser';

import { form } from './templates.js';

const app = express(); // creating a new app via express which a lot of logic is all stored behind the scnee

app.use(bodyParser.urlencoded());

app.use('/form', (req, res) => {
  res.send(form);
});

app.use('/submit', (req, res, next) => {
  console.log(req.body); // this needs to be parsed first
  res.redirect('/form');
});

const port = 8000;
app.listen(port, () => {
  console.log(`Listening to port: ${port}`);
});
