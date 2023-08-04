import express from 'express';
import bodyParser from 'body-parser';

import formRouter from './routes/form.js';

const app = express(); // creating a new app via express which a lot of logic is all stored behind the scnee

app.use(bodyParser.urlencoded({extended: false}));

app.use('/user', formRouter);

// A catch all route
app.use((req, res) => {
  res.status(404);
  res.send('<p>Page Not Found.</p>')
})

const port = 8000;
app.listen(port, () => {
  console.log(`Listening to port: ${port}`);
});
