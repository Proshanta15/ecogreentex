import express from "express";
import { deleteUserById, getAllContacts, getAllServices, getAllUsers, getUserById, updateUserById } from "../controllers/admin-controller.js";
import adminMiddleware from "../middlewares/admin-middleware.js";
import authMiddleware from "../middlewares/auth-middleware.js";
const router = express.Router();

router.route('/users').get(authMiddleware, adminMiddleware, getAllUsers);

router.route('/users/:id').get(authMiddleware, adminMiddleware, getUserById);

router.route('/users/update/:id').patch(authMiddleware, adminMiddleware, updateUserById);

router.route('/users/delete/:id').delete(authMiddleware, adminMiddleware, deleteUserById);

router.route('/contacts').get(authMiddleware, adminMiddleware, getAllContacts);
router.route('/services').get(authMiddleware, adminMiddleware, getAllServices);

export default router;