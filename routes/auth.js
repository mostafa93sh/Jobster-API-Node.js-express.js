const express = require("express");
const router = express.Router();
const authenctiatedUser = require("../middleware/authentication");
const { register, login, updateUser } = require("../controllers/auth");
router.post("/register", register);
router.post("/login", login);
router.patch("/updateUser", authenctiatedUser, updateUser);

module.exports = router;
