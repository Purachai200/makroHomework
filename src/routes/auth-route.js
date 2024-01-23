const express = require("express");
const router = express.Router();

router.post("/auth/register", () => {});
router.post("/auth/login", () => {});
router.post("/auth/forget-password", () => {});
router.get("/auth/forget-passwotd/:token", () => {});
router.post("/auth/reset-password", () => {})

module.exports = router;