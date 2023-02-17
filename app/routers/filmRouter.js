const Express = require('express');
const filmMiddleware = require('../middlewares/filmMiddleware');
const filmRouter = Express.Router();

filmRouter.use(filmMiddleware);

const { getAllFilm, getFilmById, createFilm, updateFilmById, deleteFilmById } = require("../controllers/filmController");

filmRouter.get("/films", getAllFilm);

filmRouter.get("/film/:filmId", getFilmById);

filmRouter.put("/film/:filmId", updateFilmById);

filmRouter.post("/film", createFilm);

filmRouter.delete("/film/:filmId", deleteFilmById);

module.exports = filmRouter;