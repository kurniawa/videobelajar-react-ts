import express from "express";
import { getAllUsers, getUserById, createUser } from "../controllers/userController.js";
import { loginUser } from "../controllers/authController.js";

const router = express.Router();

router.get("/", getAllUsers);
router.get("/:id", getUserById);
router.post("/", createUser);
router.post("/login", loginUser);

export default router;
