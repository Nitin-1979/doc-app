const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PatientSchema = new Schema({
    name:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    age:{
        type: String,
        required: true,
    },
    doctorAssigned:{
        type: Schema.Types.ObjectId,
        ref: 'Doctor',
        required: true
    }
})

module.exports = mongoose.model("Patient",PatientSchema) 