const Mongoose = require('mongoose');
Mongoose.connect("mongodb://localhost:27017/REST_API_FILM", function (error) {
    if (error) throw error;
    console.log("Successfully connect to database");
})

const filmRouter = require('./app/routers/filmRouter');

const Express = require('express');
const app = Express();

app.use(Express.json());
app.use(Express.urlencoded({
    urlencoded: true,
}));
app.use('/', filmRouter);

const port = 8000;

app.listen(port, () => {
    console.log(`Server starting on port ${port}`);
})