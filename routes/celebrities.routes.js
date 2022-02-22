const router = require("express").Router()
const CelebrityModel = require("../models/Celebrity.model")


//RUTAS
router.get("/create", (req, res, next) => {
    res.render("celebrities/new-celebrity.hbs")
})

router.post("/create", (req, res, next) => {
    const {name, ocupation, catchPhrase} = req.body
    CelebrityModel.create({
        name,
        ocupation,
        catchPhrase
    }) 
    .then ((response) => {
        res.redirect("/celebrities")
    })
    .catch ((err) => {
        res.render("celebrities/new-celebrity.hbs")
    })
})

router.get ("/", (req, res, next) => {
    CelebrityModel.find()
    .then ((allCelebrities) => {
        // console.log("Funciona: ", allCelebrities);
        res.render("celebrities/celebrities.hbs", {allCelebrities})
    })
    .catch ((err) => {
        next(err)
    })
})









module.exports = router