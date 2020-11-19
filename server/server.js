const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');

const dot = require('dotenv')

dot.config();

const app = express()



mongoose.connect({})
.then(() => {

    console.log('the database is not connected')
})

app.use(cors())
app.use(bodyParser.json({limit:"30mb", extended:true}));
app.use(bodyParser.urlencoded({extended:true}))
app.use(morgan())



const PORT = process.env.PORT || 5000


app.listen(() =>{

    console.log(`now listening on ${PORT}`)


})