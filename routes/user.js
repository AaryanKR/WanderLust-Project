const express = require("express");
const router = express.Router({});
const User = require("../models/user.js");
const wrapAsync = require("../utils/wrapAsync");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware.js");

const userController = require("../controller/user.js");

//using router.route    (signup)
router
    .route("/signup")
    .get(userController.renderSignupForm)
    .post(wrapAsync(userController.signup)
);

//using router.route    (login)
router
    .route("/login")
    .get(userController.renderLoginForm)
    .post( 
    saveRedirectUrl , 
    passport.authenticate("local" , {
        failureRedirect : "/login" , 
        failureFlash : true,
    }) , 
    userController.login
);

//get method   -  LOGOUT
router.get("/logout" , userController.logout);

module.exports = router;