import express from 'express';
import authControllers from '../controllers/auth-controller.js';

const router = express.Router();

router.route('/').get(authControllers.home);

router.route('/register').post(authControllers.register);

router.route('/login').post(authControllers.login);

// Contact page route
router.route('/contact').get(authControllers.contact);

export default router;
