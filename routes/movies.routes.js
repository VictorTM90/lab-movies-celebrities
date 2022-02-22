const router = require("express").Router();
const MovieModel = require("../models/Movie.model");
const CelebrityModel = require("../models/Celebrity.model");

//RUTAS
router.get("/create", async (req, res, next) => {
 
 
    try {
    const allCelebrities = await CelebrityModel.find();
    console.log(allCelebrities)
    res.render("movies/new-movie.hbs", { allCelebrities });
  } catch (err) {
    next(err);
  }


});







module.exports = router;
