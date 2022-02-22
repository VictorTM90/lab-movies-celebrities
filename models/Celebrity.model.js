const mongoose = require("mongoose")

const celebritySchema = new mongoose.Schema ({
        name: {
             type: String,  
        //   unique: true,
        },
                 
        ocupation: String,
        catchPhrase: String,
})

// Crear modelo y exportar

const CelebrityModel = mongoose.model("Celebrity", celebritySchema );

module.exports = CelebrityModel
