
const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose')
const verifyToken = require('./middlewares/verifyJwtToken');
const Routes = require('./routes');



const app = express();
app.use(express.json());

app.use('/auth',Routes);
app.use('/api',verifyToken, Routes);

mongoose.connect('mongodb://doctor:password@localhost:27017/doctor?authSource=admin')
.then(res =>{
    console.log("connected Db and running")
    app.listen(process.env.PORT);
}).catch(err=>{
    console.log("error",err)
})

