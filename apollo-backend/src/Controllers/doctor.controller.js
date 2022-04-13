const express = require('express');
const Doctor = require('../Model/Doctor.model');
const Router = express.Router();

Router.get('/', async (req, res) => {
    let doctor = await Doctor.find();
    res.status(200).json(doctor);
});

module.exports = Router;