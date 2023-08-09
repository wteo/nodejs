import express from 'express';

import usersController from '../controllers/users.js';

const router = express.Router();

router.post('/users', usersController.postUser);

export default router;