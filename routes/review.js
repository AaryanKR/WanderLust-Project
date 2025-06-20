const express = require("express");
const router = express.Router({mergeParams : true});
const wrapAsync = require("../utils/wrapAsync.js");
// const {listingSchema , reviewSchema} = require("../schema.js");
const Review = require("../models/review.js");
const Listing = require("../models/listing.js");
const {isLoggedIn , isReviewAuthor} = require("../middleware.js");

const reviewController = require("../controller/review.js");

//review of user
//post request
router.post("/" , isLoggedIn , wrapAsync(reviewController.createReview));

//delete review route
router.delete("/:reviewId" , isLoggedIn , isReviewAuthor , wrapAsync(reviewController.destroyReview));

module.exports = router;