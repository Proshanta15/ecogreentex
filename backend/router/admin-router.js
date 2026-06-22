import express from "express";
import { getAllContacts, getAllUsers } from "../controllers/admin-controller.js";
const router = express.Router();

router.route('/users').get(getAllUsers);
router.route('/contacts').get(getAllContacts);

export default router;