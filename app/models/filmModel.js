const mongoose = require('mongoose');

const filmSchema = new mongoose.Schema({
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

module.exports = mongoose.model("Film", filmSchema);