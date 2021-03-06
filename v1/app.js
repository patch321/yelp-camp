var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

var campgrounds = [
        {name: "Salmon Creek", image: "https://farm2.staticflickr.com/1281/4684194306_18ebcdb01c.jpg"},
        {name: "Granite Hill", image: "https://farm4.staticflickr.com/3872/14435096036_39db8f04bc.jpg"},
        {name: "Mountain Goat's Rest", image: "https://farm4.staticflickr.com/3273/2602356334_20fbb23543.jpg"},
        {name: "Salmon Creek", image: "https://farm2.staticflickr.com/1281/4684194306_18ebcdb01c.jpg"},
        {name: "Granite Hill", image: "https://farm4.staticflickr.com/3872/14435096036_39db8f04bc.jpg"},
        {name: "Mountain Goat's Rest", image: "https://farm4.staticflickr.com/3273/2602356334_20fbb23543.jpg"},
        {name: "Salmon Creek", image: "https://farm2.staticflickr.com/1281/4684194306_18ebcdb01c.jpg"},
        {name: "Granite Hill", image: "https://farm4.staticflickr.com/3872/14435096036_39db8f04bc.jpg"},
        {name: "Mountain Goat's Rest", image: "https://farm4.staticflickr.com/3273/2602356334_20fbb23543.jpg"}
    ]

app.get("/", function(req,res){
    res.render("landing");
});

app.get("/campgrounds", function(req,res){
    res.render("campgrounds", {campgrounds: campgrounds});
});

app.get("/campgrounds/new", function(req, res){
   res.render("new"); 
});

app.post("/campgrounds", function(req, res){
   //get data from form and add to campgrounds array
   var name = req.body.name;
   var image = req.body.image;
   var newCampground = {name: name, image: image}
   campgrounds.push(newCampground);
   //redirect back to campgrounds page
   res.redirect("/campgrounds");
   
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("The YelpCamp Server Has Started!");
});
