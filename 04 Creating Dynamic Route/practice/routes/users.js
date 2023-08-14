import express from 'express';

import usersController from '../controllers/users.js';

const router = express.Router();

router.get('/result', usersController.getUsernames);

router.post('/users', usersController.postUser);

router.get('/profile/:userId', usersController.getUser);

export default router;