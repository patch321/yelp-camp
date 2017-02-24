var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
    {
        name: "Cloud's Rest",
        image: "https://farm6.staticflickr.com/5181/5641024448_04fefbb64d.jpg",
        description: "Bacon ipsum dolor amet tenderloin pork loin shankle ground round meatloaf, sirloin brisket tail swine tri-tip tongue ball tip doner leberkas shank. Beef ribs brisket bacon pancetta biltong corned beef, chicken hamburger frankfurter pastrami ball tip ribeye kielbasa. Drumstick kielbasa frankfurter pig chuck. Leberkas tri-tip hamburger flank. Andouille pancetta shank pork loin jowl. Drumstick kielbasa frankfurter pig chuck. Leberkas tri-tip hamburger flank. Andouille pancetta shank pork loin jowl."
    },
    {
        name: "Desert Mesa",
        image: "https://farm4.staticflickr.com/3270/2617191414_c5d8a25a94.jpg",
        description: "Bacon ipsum dolor amet tenderloin pork loin shankle ground round meatloaf, sirloin brisket tail swine tri-tip tongue ball tip doner leberkas shank. Beef ribs brisket bacon pancetta biltong corned beef, chicken hamburger frankfurter pastrami ball tip ribeye kielbasa. Drumstick kielbasa frankfurter pig chuck. Leberkas tri-tip hamburger flank. Andouille pancetta shank pork loin jowl. Drumstick kielbasa frankfurter pig chuck. Leberkas tri-tip hamburger flank. Andouille pancetta shank pork loin jowl."
    },
    {
        name: "Canyon Floor",
        image: "https://farm4.staticflickr.com/3872/14435096036_39db8f04bc.jpg",
        description: "Bacon ipsum dolor amet tenderloin pork loin shankle ground round meatloaf, sirloin brisket tail swine tri-tip tongue ball tip doner leberkas shank. Beef ribs brisket bacon pancetta biltong corned beef, chicken hamburger frankfurter pastrami ball tip ribeye kielbasa. Drumstick kielbasa frankfurter pig chuck. Leberkas tri-tip hamburger flank. Andouille pancetta shank pork loin jowl. Drumstick kielbasa frankfurter pig chuck. Leberkas tri-tip hamburger flank. Andouille pancetta shank pork loin jowl."
    }
]

function seedDB(){
    //Remove all campgrounds
    Campground.remove({}, function(err){
        if(err){
            console.log(err);
        }
        console.log("removed campgrounds!");
        //add a few campgrounds
        data.forEach(function(seed){
            Campground.create(seed, function(err, campground){
                if(err){
                    console.log(err);
                } else{
                    console.log("added a campground");
                    //create a comment
                    Comment.create(
                        {
                            text: "This place is great but I wish there was internet",
                            author: "Homer"
                        }, function(err, comment){
                            if(err){
                                console.log(err);
                            } else{
                                campground.comments.push(comment);
                                campground.save();
                                console.log("Created new comment");
                            }
                        });
                }
            });    
        });
    });
    // add a few comments
}

module.exports = seedDB;