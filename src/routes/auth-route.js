const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth-controller");

router.post("/auth/register", authController.register);
router.post("/auth/login", authController.login);
router.post("/auth/forget-password", authController.forgetPassword);
router.get("/auth/forget-passwotd/:token", authController.verfyForgetPassword);
router.post("/auth/reset-password", authController.resetPassword)

module.exports = router;