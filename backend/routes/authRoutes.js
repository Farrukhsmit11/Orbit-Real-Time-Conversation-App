import express from "express"
import { getProfile, login, registerUser } from "../controllers/authController.js";

const router = express.Router();

router.route("/login").post(login)
router.route("/registerUser").post(registerUser)
router.route("/get-profile").get(getProfile)

export default router