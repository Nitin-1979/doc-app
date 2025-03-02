const Doctor = require('../models/doctor')
const Patient = require('../models/patient')
const jwtService = require('../services/jwtService')

exports.login = async (req, res)=>{
    try {
        const{email, password, userType} = req.body
        let user = null
        if(userType == 'doctor'){
            user = await Doctor.findOne({email: email})
        }else{
            user = await Patient.findOne({email: email})
        }
        if (user && user.comparePassword(password)) {
            token = jwtService.generateToken(user._id,email)
            res.send({status:"loggedin",token: token})
        }else{
            return res.status(401).json({ error: 'Invalid credentials' });
        }
        
    } catch (error) {
        return res.status(502).json({ error: error });
    }
   
}

exports.signUp = async (req, res)=>{
    try {
        const{name, email,age, password, userType} = req.body
        let user = null
        if(userType == 'doctor'){
            user = new Doctor({name: name, email: email, age: age,password: password});
            await user.save()
        }else{
            user = new Patient({name: name, email: email, age: age, password: password});
            await user.save()
        }
        res.status(200).json({ message: "Signed Up successfully", detail: user });
    } catch (error) {
        return res.status(502).json({ error: error });
    }
}