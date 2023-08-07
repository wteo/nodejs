import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url'; 

import formRouter from './routes/form.js';
import userRouter from './routes/users.js';

const __filename = fileURLToPath(import.meta.url); 
const __dirname = path.dirname(__filename);  

const app = express();

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public'))); 
app.use(express.urlencoded({ extended: false })); 

app.use(formRouter);

app.use(userRouter);

app.use((req, res) => {
    res.status(404);
    res.render(path.join(__dirname, 'views', '404.ejs'), { pageTitle: 'Page Not Found' });
})

const port = 8000;
app.listen(port, () => {
    console.log(`Listening to Port: ${port}`)
});


// 1. create a npm project and install Express.js
// 2. Add two routes
//   - "/" => Holds a <form> that allows user to input their name
//   - "/users" => Outputs an <ul> with the user names (or some error text) 
// Make sure you also include layoutes via "includes"