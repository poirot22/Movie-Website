const schemas = require('./schemas.js')

const mongoose = require('mongoose')

mongoose.connect('mongodb://0.0.0.0:27017/MoviesProject').then(()=>{
    console.log('connected to database')
}).catch((err)=>{console.log(err)})