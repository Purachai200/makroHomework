const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth-controller");

router.post("/register", authController.register);
router.post("/login", authController.login);
router.post("/forget-password", authController.forgetPassword);
router.get("/forget-passwotd/:token", authController.verfyForgetPassword);
router.post("/reset-password", authController.resetPassword)

module.exports = router;