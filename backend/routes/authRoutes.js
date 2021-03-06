const express = require("express");
const router = express.Router();

// middlewares
const { _nullCheckLogin } = require("../middlewares/auth/_nullCheckLogin");

// controllers
const adminLogin = require("../controllers/Auth/adminLogin").adminLogin;
const adminLogout = require("../controllers/Auth/adminLogout").adminLogout;
const adminRegister = require("../controllers/Auth/adminRegister");

const renewToken = require("../controllers/Auth/auth").renewtoken;

// routes
router.route("/login").post(_nullCheckLogin, adminLogin);
router.route("/logout").post(adminLogout);
router.route("/refresh").post(renewToken);
router.route("/register").post(adminRegister);

module.exports = router;
