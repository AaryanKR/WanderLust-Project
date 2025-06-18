const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Review = require("./review.js");

const listingSchema = new Schema({
    title : {
       type : String,
       required : true,
    },

    description : String,

    image : {
        url : String,
        filename : String,
    },

    price : Number,

    location : String,

    country : String,

    reviews : [
        {
            type : Schema.Types.ObjectId,
            ref : "Review",
        },
    ],
    owner : {
        type : Schema.Types.ObjectId,
        ref : "User",
    },
});

//writing middleware for - IF user deletes a listing, it's obj_id is deleted but reviews from the db is not. 
//So to prevent that
listingSchema.post("findOneAndDelete" , async(listing) => {
    if(listing) {
        await Review.deleteMany({_id : {$in : listing.reviews}});
    }
});

const Listing = mongoose.model("Listing" , listingSchema);
module.exports = Listing;