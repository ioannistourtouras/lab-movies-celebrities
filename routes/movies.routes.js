// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();
const Movie = require("../models/Movie.model");
const Celebrity = require("../models/Celebrity.model")

// all your routes here
router.get("/movies/create", async (req, res) => {
  try {
    const celebritiesFromDB = await Celebrity.find();
    res.render("movies/new-movie", { allTheCelebrities: celebritiesFromDB });
  } catch (err) {
    console.log("error here");
  }
});

router.post("/movies/create", async (req, res) => {
  try {
    const { title, genre, plot, cast } = req.body;    
    console.log(req.body) // to see the console output in bash
    // we have to create a movie and give input to the fields
    // on the browser!
    await Movie.create({
      title: title,
      genre: genre,
      plot: plot,
      cast: cast,
    });
    res.redirect("/movies");
  } catch (err) {
    console.log("eeror here");
    console.log(err)
    res.render("movies/new-movie"); // ok this block
  }
});

router.get("/movies", async (req, res) => {
   //   res.send("Hello from single book page");  
  try {
    const moviesFromDB = await Movie.find();
    console.log(moviesFromDB, "moviedb")
    res.render("movies/movies", { allTheMovies: moviesFromDB });
  } catch (err) {
    console.log("error here");
  }
});

module.exports = router;
