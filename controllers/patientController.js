const Patient = require('../models/patient')
const Doctor = require('../models/doctor')

exports.register = async (req,res) => {
    try{
        const {name, email,age,doctorName} = req.body
        const doctor = await Doctor.findOne({name: doctorName})
        const patient = new Patient({name: name, age: age, email: email, doctorAssigned: doctor})
        await patient.save()
        res.send({data: patient.id})
    }catch(err){
        console.log("Error")
        res.status(500).json({ error: "Internal Server Error" });
    }
}

exports.detail = async(req,res)=>{
    try {
        const name = req.query.name
        const details = await Patient.findOne({name: name}).select("name -_id").populate('doctorAssigned','name -_id')
        res.send(details)
    } catch (error) {
        console.log("Error",error)
        res.status(500).json({ error: "Internal Server Error" });
    }
}