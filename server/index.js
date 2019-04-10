const express = require('express')
const app = express()
const port = 5040
const Contractor = require('./controller/Contractors')
app.use(express.json())



app.listen(port, ()=> {console.log('Listening on port',port)})