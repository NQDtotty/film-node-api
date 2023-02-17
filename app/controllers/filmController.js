const Mongoose = require('mongoose');
const filmModel = require('../models/filmModel');

const getAllFilm = (req, res) => {
    filmModel.find((error, data) => {
        if (error) {
            res.status(500).json({
                message: `Internal server error: ${error.message}`,
            });
        }
        else {
            res.status(200).json({
                ...data
            });
        }
    })
}

const getFilmById = (req, res) => {
    let filmId = req.params.filmId;
    if (!Mongoose.Types.ObjectId.isValid(filmId)) {
        res.status(400).json({
            message: "id is invalid!",
        })
    }
    else {
        filmModel.findById(filmId, (error, data) => {
            if (error) {
                res.status(500).json({
                    message: `Internal server error: ${error.message}`,
                });
            }
            else {
                res.status(200).json({
                    data
                });
            }
        })
    }
}

const createFilm = (req, res) => {
    let body = req.body;
    if (!body.name) {
        res.status(400).json({
            message: "name is require!",
        })
    }
    else if (!body.year) {
        res.status(400).json({
            message: "year is require!",
        })
    }
    else if (!body.director) {
        res.status(400).json({
            message: "director is require!",
        })
    }
    else if (!body.nation) {
        res.status(400).json({
            message: "nation is require!",
        })
    }
    else {
        let film = {
            _id: Mongoose.Types.ObjectId(),
            name: body.name,
            year: body.year,
            director: body.director,
            nation: body.nation
        }
        filmModel.create(film, (error, data) => {
            if (error) {
                res.status(500).json({
                    message: `Internal server error: ${error.message}`,
                });
            }
            else {
                res.status(201).json({
                    data
                });
            }
        })
    }
}

const updateFilmById = (req, res) => {
    let filmId = req.params.filmId;
    let body = req.body;

    if (!Mongoose.Types.ObjectId.isValid(filmId)) {
        res.status(400).json({
            message: "id is invalid!",
        })
    }
    else if (!body.name) {
        res.status(400).json({
            message: "name is require!",
        })
    }
    else if (!body.year) {
        res.status(400).json({
            message: "year is require!",
        })
    }
    else if (!body.director) {
        res.status(400).json({
            message: "director is require!",
        })
    }
    else if (!body.nation) {
        res.status(400).json({
            message: "nation is require!",
        })
    }
    else {
        let film = {
            name: body.name,
            year: body.year,
            director: body.director,
            nation: body.nation
        };
        filmModel.findByIdAndUpdate(filmId, film, (error, data) => {
            if (error) {
                res.status(500).json({
                    message: `Internal server error: ${error.message}`,
                });
            }
            else {
                res.status(200).json({
                    data
                });
            }
        })
    }
}

const deleteFilmById = (req, res) => {
    let filmId = req.params.filmId;
    if (!Mongoose.Types.ObjectId.isValid(filmId)) {
        res.status(400).json({
            message: "id is invalid!",
        })
    }
    else {
        filmModel.findByIdAndDelete(filmId, (error, data) => {
            if (error) {
                res.status(500).json({
                    message: `Internal server error: ${error.message}`,
                });
            }
            else {
                res.status(204).json({
                    data
                });
            }
        })
    }
}

module.exports = { getAllFilm, getFilmById, createFilm, updateFilmById, deleteFilmById };