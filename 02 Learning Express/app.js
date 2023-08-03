import express from 'express';

const app = express(); // creating a new app via express which a lot of logic is all stored behind the scnee

app.use('/', (req, res, next) => {
  console.log('This always runs');
  next();
});

app.use('/addon', (req, res, next) => {
  res.send('<p>This is the add-on page</p>');
});

app.use('/', (req, res, next) => {
  res.send('<p>This is the main page</p>');
});

const port = 8000;
app.listen(port, () => {
  console.log(`Listening to port: ${port}`);
});
