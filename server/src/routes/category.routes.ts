import { Router } from "express";
import {
  createCategory,
  deleteCategory,
  getCategories,
  getCategoryBySlug,
  updateCategory,
} from "../controllers/category.controller";
import { protect, authorizeRoles } from "../middleware/auth.middleware";
import { USER_ROLES } from "../constants";

const router = Router();

router.get("/", getCategories);
router.get("/:slug", getCategoryBySlug);

router.post("/", protect, authorizeRoles(USER_ROLES.ADMIN), createCategory);
router.put("/:id", protect, authorizeRoles(USER_ROLES.ADMIN), updateCategory);
router.delete("/:id", protect, authorizeRoles(USER_ROLES.ADMIN), deleteCategory);

export default router;