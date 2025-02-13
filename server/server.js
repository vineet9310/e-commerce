const express = require('express')
const mongoose = require('mongoose')


//create a database connection -> u can also
//create a separate file for this and then import/use that file here

mongoose.connect('mongodb+srv://vineetbeniwal9310:beniwal1000@e-commerce.e2975.mongodb.net/').then(()=>console.log('MongoDB is connected')).catch(error=>console.log(error));

const app = express()
const PORT = process.env.PORT || 5000;