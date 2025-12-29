import express from "express";
import {
  registerUser,
  loginUser,
  newRefreshToken,
  me,
  logoutUser
} from "../controllers/auth.controller.js";
import { protect } from "../middlewares/auth.middleware.js";
import { adminProtect } from "../middlewares/auth.middleware.js";
import { admin } from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/refresh", newRefreshToken);
router.get("/me", protect, me);
router.get("/admin", protect, adminProtect, admin);
  // Clear cookies and logout
router.post("/logout", protect, logoutUser);

export default router;
