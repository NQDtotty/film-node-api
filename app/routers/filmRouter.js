const express = require('express');
const filmMiddleware = require('../middlewares/filmMiddleware');
const filmRouter = express.Router();

filmRouter.use(filmMiddleware);

const { getAllFilm, getFilmById, createFilm, updateFilmById, deleteFilmById } = require("../controllers/filmController");

filmRouter.get("/films", getAllFilm);

filmRouter.get("/films/:filmId", getFilmById);

filmRouter.put("/films/:filmId", updateFilmById);

filmRouter.post("/films", createFilm);

filmRouter.delete("/films/:filmId", deleteFilmById);

module.exports = filmRouter;