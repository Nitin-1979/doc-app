const Doctor = require('../models/doctor')

exports.doctorDetail= async (req,res)=>{
    try{
        const name = req.query.name;
        const doctorDetail = await Doctor.find({name: name})
        res.json(doctorDetail);
    }catch (err) {
        console.error("Error is", err);
        res.status(500).json({ error: "Internal Server Error" });
    }
}   

exports.createDoctor= async(req,res)=>{
    try{
        const {name,email,age} = req.body
        const doctor = new Doctor({name: name, email: email, age: age});
        await doctor.save()
        res.json({data: doctor.id});
    }catch(err){
        console.log("eror",err)
    }
}

exports.getAllDocs = async (req, res) => {
    try {
        const allDocs = await Doctor.find({});
        const doctor = { ye: allDocs };
        res.json({ data: doctor });
    } catch (err) {
        console.error("Error is", err);
        res.status(500).json({ error: "Internal Server Error" });
    }
};
