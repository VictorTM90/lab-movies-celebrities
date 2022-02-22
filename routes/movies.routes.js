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

router.post("/create", async (req, res, next)=>{
     try {
         const {title, genre, plot, cast} = req.body
       
         console.log(req.body)
         const newMovie = await MovieModel.create ({
            title, 
            genre, 
            plot, 
            cast
        })
        console.log(newMovie);
        res.redirect("/")
     }
     catch(err){
        next(err)
     }
})


router.get("/", async (req, res, next) => {

  try{
  const allMovies = await MovieModel.find()
  res.render("movies/movies.hbs", {allMovies})
  }
  catch (err){
    next(err)
  }
  
})

// router.get("/:id", async (req, res, next) => {

//   try{
//   const {id} = req.params
//   const oneMovie = await MovieModel.findById(id).populate("cast")
//   console.log(oneMovie);
//   res.render("movies/movie-details.hbs", {oneMovie})
//   }
//   catch (err) {
//     next(err)
//   }
// })

router.get("/:id",  (req, res, next) => {

  MovieModel.findById(req.params.id)
  .populate("cast") // *=> identificar el parametro que crea la relacion
  .then((oneMovie) => {
    console.log(oneMovie);
    res.render("movies/movie-details.hbs", {oneMovie})
  })
  .catch ((err) => {
    next(err)
  })
 
})






module.exports = router;
