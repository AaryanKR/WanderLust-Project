const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const Listing = require("../models/listing.js");
const {isLoggedIn , isOwner} = require("../middleware.js");
const listingController = require("../controller/listing.js");
const multer = require("multer");
const {storage} = require("../cloudConfig.js");
const upload = multer({storage});

//performing crud operations using rest apis
//using router.route (index , create)
router
    .route("/")
    .get(wrapAsync(listingController.index))      
    .post( 
        isLoggedIn ,
        upload.single("listing[image]"),
        wrapAsync(listingController.createListing)   
);

//NEW route
router.get("/new" , isLoggedIn , listingController.renderNewForm);

//Search route
router.get("/search", wrapAsync(listingController.searchByCountry));

//using router.route (show , update , delete)
router
    .route("/:id")
    .get(wrapAsync(listingController.showListing))
    .put(
        isLoggedIn , 
        isOwner , 
        upload.single("listing[image]") , 
        wrapAsync(listingController.updateListing)
    )
    .delete(isLoggedIn , isOwner , wrapAsync(listingController.destroyListing)
);

//Edit route
router.get("/:id/edit" , isLoggedIn , isOwner , wrapAsync(listingController.renderEditForm));

module.exports = router;