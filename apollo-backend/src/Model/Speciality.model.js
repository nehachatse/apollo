const mongoose  = require('mongoose');

const SpecialitySchema = new mongoose.Schema({
    speciality: {type: String, required:true},
    doctor: {type: mongoose.Schema.Types.ObjectId, ref: 'doctor'},
    
})

let Speciality= mongoose.model('speciality', SpecialitySchema);

module.exports = Speciality;
;