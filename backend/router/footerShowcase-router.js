import express from "express";
import {
  createOrUpdateFooterShowcase,
  getFooterShowcase,
  toggleFooterShowcaseStatus,
} from "../controllers/footerShowcase-controller.js";
import authMiddleware from "../middlewares/auth-middleware.js";
import adminMiddleware from "../middlewares/admin-middleware.js";

const router = express.Router();

// ============================================
// PUBLIC ROUTES
// ============================================
router.route("/footer-showcase").get(getFooterShowcase);

// ============================================
// ADMIN ROUTES
// ============================================
router
  .route("/admin/footer-showcase")
  .post(authMiddleware, adminMiddleware, createOrUpdateFooterShowcase)
  .put(authMiddleware, adminMiddleware, createOrUpdateFooterShowcase);

router.route("/admin/footer-showcase/toggle").put(authMiddleware, adminMiddleware, toggleFooterShowcaseStatus);

export default router;
