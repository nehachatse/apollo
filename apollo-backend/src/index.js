const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
let doctorController = require('./Controllers/doctor.controller');
let appoinmentController = require('./Controllers/appoinment.controller');
const DB_URL = env.process.DB_URL;

let app = express();
app.use(express.json());
app.use(cors());

app.use('/doctor', doctorController);
app.use('/appoinments', appoinmentController);

const connect = () => {
    mongoose.connect(DB_URL)
}

app.listen('8000', () => {
    connect();
    console.log('listing...')
})