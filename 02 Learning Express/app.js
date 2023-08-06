import express from 'express';
import bodyParser from 'body-parser';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';

import formRouter from './routes/form.js';

const app = express(); // creating a new app via express which a lot of logic is all stored behind the scene

app.set('view engine', 'ejs');

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(bodyParser.urlencoded({extended: false}));

app.use('/user', formRouter);

// A catch all route
app.use((req, res) => {
  res.status(404);
  // res.sendFile(path.join(__dirname, 'views', '404.html'));
  res.render(path.join(__dirname, 'views', '404'));
})

const port = 8000;
app.listen(port, () => {
  console.log(`Listening to port: ${port}`);
});
