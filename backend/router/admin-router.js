import express from "express";
import { deleteContactById, deleteUserById, getAllContacts, getAllServices, getAllUsers, getContactById, getUserById, updateContactById, updateUserById } from "../controllers/admin-controller.js";
import adminMiddleware from "../middlewares/admin-middleware.js";
import authMiddleware from "../middlewares/auth-middleware.js";
import { contactContentForm, getContactContent, updateContactContent } from "../controllers/contact-content-controller.js";
import { createFAQ, deleteFAQ, getAllFAQ, getSingleFAQ } from "../controllers/faq-controller.js";
const router = express.Router();

router.route('/users').get(authMiddleware, adminMiddleware, getAllUsers);
router.route('/users/:id').get(authMiddleware, adminMiddleware, getUserById);
router.route('/users/update/:id').patch(authMiddleware, adminMiddleware, updateUserById);
router.route('/users/delete/:id').delete(authMiddleware, adminMiddleware, deleteUserById);

router.route('/contacts').get(authMiddleware, adminMiddleware, getAllContacts);
router.route('/contacts/:id').get(authMiddleware, adminMiddleware, getContactById);
router.route('/contacts/update/:id').patch(authMiddleware, adminMiddleware, updateContactById);
router.route('/contacts/delete/:id').delete(authMiddleware, adminMiddleware, deleteContactById);


router.route('/services').get(authMiddleware, adminMiddleware, getAllServices);

// Contact Content
router.route('/contact/content').get(authMiddleware, adminMiddleware, getContactContent);
router.route('/contact/content').post(authMiddleware, adminMiddleware, contactContentForm);
router.route('/contact/content/update/:id').patch(authMiddleware, adminMiddleware, updateContactContent);

// Faq Router
router.route('/faq/create').post(authMiddleware, adminMiddleware, createFAQ);
router.route('/faq').get(authMiddleware, adminMiddleware, getAllFAQ);
router.route('/faq/edit/:id').get(authMiddleware, adminMiddleware, getSingleFAQ);
router.route('/faq/edit/:id').get(authMiddleware, adminMiddleware, getSingleFAQ);
router.route('/faq/delete/:id').delete(authMiddleware, adminMiddleware, deleteFAQ);

export default router;