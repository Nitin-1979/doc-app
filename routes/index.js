const express = require('express');
const router = express.Router();
const doctorController = require('../controllers/doctorController');
const patientController = require('../controllers/patientController')
const authController = require('../controllers/authController')

router.post('/login',authController.login)
router.post('/signup',authController.signUp)

router.get('/doctor/details',doctorController.doctorDetail);
router.post('/doctor/create',doctorController.createDoctor);
router.get('/doctor/get_all',doctorController.getAllDocs);

router.post('/patient/register',patientController.register)
router.get('/patient/detail',patientController.detail)

module.exports = router;