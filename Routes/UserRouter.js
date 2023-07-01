const express = require("express");
const router = express.Router();

//controller function

const { signupUser, loginUser } = require("../Controlle/Usercontroller");

//login

router.post("/login", loginUser);

//signup

router.post("/signup", signupUser);

module.exports = router;
