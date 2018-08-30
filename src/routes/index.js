import express from 'express';
import validate from '../handlers/validation';
import isLogggedIn from '../middleware/auth';
import { asyncMethod } from '../helpers';
import * as userController from '../controllers/userController';
import { SaveUser } from '../middleware/validators';


// Initialize Router
const router = express.Router();

// User Routes
router.post('/users/register',
  validate(SaveUser),
  asyncMethod(userController.register)
);

router.post('/users/login', asyncMethod(userController.login));
router.get('/users/me', asyncMethod(isLogggedIn), userController.getData);


export default router;
