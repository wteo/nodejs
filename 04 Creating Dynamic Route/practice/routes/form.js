import express from 'express';

import formController from '../controllers/form.js';

const router = express.Router();

router.get('/', formController.getForm);

export default router;