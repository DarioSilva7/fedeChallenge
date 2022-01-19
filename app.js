const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const expressValidator = require('express-validator');
const app = express()
const routes = require('./routes/index')

require('./db')
 
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.use(morgan('dev'))

app.use('/',routes) 


const PORT = 3000;
app.listen(PORT, ()=>{
    console.log("Conectado al puerto: ", PORT);
})

