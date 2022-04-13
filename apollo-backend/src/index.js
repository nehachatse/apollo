const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
let doctorController = require('./Controllers/doctor.controller');
let appoinmentController = require('./Controllers/appoinment.controller');
const DB_URL = 'mongodb+srv://neha:neha123@cluster0.3eq5o.mongodb.net/library?retryWrites=true&w=majority'

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