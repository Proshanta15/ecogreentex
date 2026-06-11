import express from 'express';
import { home } from '../controllers/auth-controller.js';

const router = express.Router();

router.route('/').get(home);

// Contact page route
router.route('/contact').get((req, res) => {
  res.send('Contact us at contact@example.com');
});

export default router;
