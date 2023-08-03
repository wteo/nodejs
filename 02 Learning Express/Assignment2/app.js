const express = require('express');

const app = new express();

app.use((req, res, next) => {
    console.log('This is the user page');
    next();
});

app.use('/users', (req, res, next) => {
    console.log('This is the users page');
    res.send('<p>This is the users page</p>');
});

app.use('/', (req, res, next) => {
    console.log('This is the main page.');
    res.send('<p>Welcome to the Main Page</p>');
});

const port = 3000;
app.listen(port);