const router = require("express").Router();

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

//link the created files
router.use(require("./celebrities.routes.js")) // ./ even in the same folder
router.use(require("./movies.routes.js"))

module.exports = router;
