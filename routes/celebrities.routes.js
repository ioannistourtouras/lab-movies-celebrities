// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();

// all your routes here
const Celebrity = require("../models/Celebrity.model")
const mongoose = require("mongoose")

router.get("/celebrities/create", async (req, res) => {
    res.render("celebrities/new-celebrity");
  })

  /*router.post("/celebrities/create", async (req, res) => {
    res.render("celebrities/new-celebrity");
  })*/
  router.post("/celebrities/create", async (req, res) => {
    try {
        const { name, occupation, catchPhrase } = req.body;
        await Celebrity.create ({
            name: name,
            occupation: occupation,
            catchPhrase: catchPhrase
        });
        res.redirect ("/celebrities")
    } catch(err) {
        console.log("eeror here")
  res.render("celebrities/new-celebrity") // ok this block
};
});

router.get("/celebrities", async (req, res) => {
const celebritiesFromDB = await Celebrity.find()
  console.log(celebritiesFromDB);
  //   res.send("Hello from single book page");
  //res.render("singleBook", { bookDetails })
    
    try {        ;
        res.render ("celebrities/celebrities", {allTheCelebrities: celebritiesFromDB})
    } catch(err) {
        console.log("error here")  
};
})





module.exports = router;