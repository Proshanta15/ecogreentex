import express from "express";
import { getAllContacts, getAllUsers } from "../controllers/admin-controller.js";
import adminMiddleware from "../middlewares/admin-middleware.js";
import authMiddleware from "../middlewares/auth-middleware.js";
const router = express.Router();

router.route('/users').get(authMiddleware, adminMiddleware, getAllUsers);
router.route('/contacts').get(authMiddleware, adminMiddleware, getAllContacts);

export default router;