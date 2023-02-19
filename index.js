const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/REST_API_FILM", function (error) {
    if (error) throw error;
    console.log("Successfully connect to database");
})

const filmRouter = require('./app/routers/filmRouter');

const bodyparser = require('body-parser');

const express = require('express');
const app = express();

app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.use('/', filmRouter);

const port = 8000;

app.listen(port, () => {
    console.log(`Server starting on port ${port}`);
})