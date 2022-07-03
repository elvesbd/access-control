import UserController from './src/controllers/UserController';

const { Router } = require('express');

const router = Router();

router.post('/users', UserController.createUser);

export { router };
