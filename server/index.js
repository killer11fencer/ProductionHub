const express = require('express')
const app = express()
const port = 5040

app.use(express.json())
const ContractCtrl = require('./controller/Contractors')

app.get('/api/contractor',ContractCtrl.get)
app.post('/api/contractor',ContractCtrl.create)
app.delete('/api/contractor/:id',ContractCtrl.delete)


app.listen(port, ()=> {console.log('Listening on port',port)})