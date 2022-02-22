const mongoose = require("mongoose")

const celebritySchema = new mongoose.Schema ({
        name: String, 
        ocupation: String,
        catchPhrase: String,
})

// Crear modelo y exportar

const CelebrityModel = mongoose.model("Celebrity", celebritySchema );

module.exports = CelebrityModel
