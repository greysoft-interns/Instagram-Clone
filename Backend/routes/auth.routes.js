const express = require("express");
const { userLogin, userSignup } = require("../controllers/auth.controller");
const router = express.Router();

router.post("/login", userLogin);
router.post("/register", userSignup);

module.exports = router;