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
    else if (!body.actor) {
        res.status(400).json({
            message: "actor is require!",
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
            actor: body.actor,
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

}

const deleteFilmById = (req, res) => {

}

module.exports = { getAllFilm, getFilmById, createFilm, updateFilmById, deleteFilmById };