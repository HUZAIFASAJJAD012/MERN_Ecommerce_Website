import express from "express";
import { login } from "../controllers/authcontroller.js";
import { logout } from "../controllers/authcontroller.js";
import { signup } from "../controllers/authcontroller.js";
const router = express.Router();

router.get("/signup", signup);

router.get("/login", login);
router.get("/logout", logout);

export default router;

// AjQIoosT5YK5lkdC