const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const postRoutes = require('./routes/post');

const dot = require('dotenv')

dot.config();

const app = express()


app.use(cors())
app.use(bodyParser.json({limit:"30mb", extended:true}));
app.use(bodyParser.urlencoded({extended:true}))
app.use(morgan())

app.use('/posts',postRoutes);



mongoose.connect(process.env.MONGO_URI,{ useNewUrlParser: true,useUnifiedTopology: true  })
.then(() => {

    console.log('the database is  connected')
})





const PORT = process.env.PORT || 5000


app.listen(PORT,() =>{

    console.log(`now listening on ${PORT}`)


})