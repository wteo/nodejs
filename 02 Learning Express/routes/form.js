import express from 'express';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';

const router = express.Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

router.get('/form', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'views', 'form.html'));
});

router.post('/submit', (req, res) => {
  console.log(req.body); 
  res.redirect('/user/form');
});

export default router;