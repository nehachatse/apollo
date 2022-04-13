const mongoose  = require('mongoose');

const SlotSchema = new mongoose.Schema({
    slot: {type: String, required:true},
        
})

let Slot= mongoose.model('slot', SlotSchema);

module.exports = Slot;
;