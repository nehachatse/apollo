const mongoose  = require('mongoose');

const appoinmentSchema = new mongoose.Schema({
    name: {type: String, required:true},
    cause: {type: String, required: true},
    fees: {type: Number, required: true},
    date: {type: Date, required: true},
    slot: {type: mongoose.Schema.Types.ObjectId, ref: 'slot'} 
})

let Appoinment = mongoose.model('appoinmnet', appoinmentSchema);

module.exports = Appoinment;