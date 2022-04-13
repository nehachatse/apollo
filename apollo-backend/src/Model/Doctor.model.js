const mongoose  = require('mongoose');

const doctorSchema = new mongoose.Schema({
    name: {type: String, required:true},
    speciality: [{type: mongoose.Schema.Types.ObjectId, ref: 'speciality'}],
    duration: {type: Number, required: true},
    fees: {type: Number, required: true},
    slots: [{type: mongoose.Schema.Types.ObjectId, ref: 'slot'}],
    appoinments: [{type: mongoose.Schema.Types.ObjectId, ref: 'appoinment'}]
})

let Doctor= mongoose.model('doctor', doctorSchema);

module.exports = Doctor;