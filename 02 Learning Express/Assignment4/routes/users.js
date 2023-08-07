import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url'; 

const __filename = fileURLToPath(import.meta.url); 
const __dirname = path.dirname(__filename);  

const router = express.Router();

const usernames = [];

router.post('/users', (req, res) => {
    usernames.push(req.body.name);
    res.render(path.join(__dirname, '..', 'views', 'users.ejs'), { pageTitle: 'Username Result', usernames });
});

export default router;