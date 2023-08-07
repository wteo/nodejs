import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url'; 

const __filename = fileURLToPath(import.meta.url); 
const __dirname = path.dirname(__filename);  

const router = express.Router();

router.get('/', (req, res) => {
    res.render(path.join(__dirname, '..', 'views', 'form.ejs'), { pageTitle: 'Submit Your Name' });
});

export default router;