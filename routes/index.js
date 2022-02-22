const router = require("express").Router();

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});


const celebritesRoutes = require( "./celebrities.routes")
router.use("/celebrities", celebritesRoutes )

const moviesRoutes = require ("./movies.routes");
router.use("/movies", moviesRoutes ); 

module.exports = router;
