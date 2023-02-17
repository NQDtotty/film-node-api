const Mongoose = require('mongoose');

const filmSchema = new Mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    year: {
        type: String,
        require: true
    },
    director: {
        type: String,
        require: true
    },
    nation: {
        type: String,
        require: true
    }
})

module.exports = Mongoose.model("Film", filmSchema);