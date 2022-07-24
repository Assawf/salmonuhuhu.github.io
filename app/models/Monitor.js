const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Monitordata = new mongoose.Schema({
	temperature: { type: Number, required: true },
	pH: { type: Number, required: true },
    Do: { type: Number, required: true },
    isOpenRoof: { type: Boolean, required: true },
    isOpenFan: { type: Boolean, required: true },
    isOpenMotor: { type: Boolean, required: true },
});

const monitordata = mongoose.model('monitordata', Monitordata);
module.exports = monitordata;