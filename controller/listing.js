const Listing = require("../models/listing.js");

//index route
module.exports.index = async (req , res) => {
    const allListings = await Listing.find({});
    res.render("listings/index.ejs" , {allListings});
};

//new route
module.exports.renderNewForm = (req, res) => {
    res.render("listings/new.ejs");
};

//show route
module.exports.showListing = async (req , res) => {
    let {id} = req.params;
    try{
        const listing = await Listing.findById(id)
        .populate({
            path : "reviews",
            populate : {
                path : "author",
            },
            })
        .populate("owner");
        if(!listing) {
        req.flash("error" , "Listing you requested for, does not exist!");
        return res.redirect("/listings");
        }
        res.render("listings/show.ejs" , {listing});
    }catch(e){
        req.flash("error", "Invalid listing ID or listing not found!");
        return res.redirect("/listings");
    }
};

//Create route
module.exports.createListing = async (req , res , next) => {
    let url = req.file.path;
    let filename = req.file.filename;
    // console.log(url , ".." , filename);
    const newListing = new Listing(req.body.listing);
    newListing.owner = req.user._id;
    newListing.image = {url , filename};
    await newListing.save();
  //this msg will be displayed only once. after refresh its gone...
    res.redirect("/listings");
    // req.flash("success" , "New Listing Created!");
};

//Edit route
module.exports.renderEditForm = async (req , res) => {
    let {id} = req.params;
    try{
        const listing = await Listing.findById(id).populate("reviews");
        if(!listing) {
        req.flash("error" , "Listing you requested for, does not exist!");
        return res.redirect("/listings");
        }
        let originalImageUrl = listing.image.url;
        originalImageUrl = originalImageUrl.replace("/upload" , "/upload/h_150,w_250");
        res.render("listings/edit.ejs" , {listing , originalImageUrl});
    }catch(e){
        req.flash("error", "Invalid listing ID or listing not found!");
        return res.redirect("/listings");
    }
};

//Update route
module.exports.updateListing = async (req , res) => {
    let {id} = req.params;
    let listing = await Listing.findByIdAndUpdate(id , {...req.body.listing});

    if(typeof req.file !== "undefined"){
        let url = req.file.path;
        let filename = req.file.filename;
        listing.image = {url , filename};
        await listing.save();
    }
    req.flash("success" , "Listing Updated!");
    res.redirect(`/listings/${id}`);
};

//Delete route
module.exports.destroyListing = async (req , res) => {
    let {id} = req.params;
    let deletedListing = await Listing.findByIdAndDelete(id);
    console.log(deletedListing);
    req.flash("success" , "Listing Deleted!");
    res.redirect("/listings");
};

//search listing
module.exports.searchByCountry = async (req, res) => {
    const { country } = req.query;
    const listings = await Listing.find({ 
        country: { $regex : new RegExp(country, 'i') } 
    }); 
    res.render("listings/search", { listings, country });
};