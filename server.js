
const express = require('express');
const app = express();
const port = 8000;
const mongoose = require('mongoose')
app.use(express.json());

const Routes = require('./routes');

app.use('/',Routes);

mongoose.connect('mongodb://doctor:password@localhost:27017/doctor?authSource=admin')
.then(res =>{
    console.log("connected Db and running")
    app.listen(port);
}).catch(err=>{
    console.log("error")
})

