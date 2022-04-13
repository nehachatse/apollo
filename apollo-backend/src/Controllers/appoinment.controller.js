const express = require('express');
const Appoinment = require('../Model/Appoinment.model');
const Router = express.Router();

Router.get('/', async (req, res) => {
    let appoinments = await Appoinment.find();
    res.status(200).json(appoinments);
});

module.exports = Router;