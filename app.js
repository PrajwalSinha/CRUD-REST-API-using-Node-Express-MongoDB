const express = require('express')
const mongoose = require('mongoose')
const url= 'mongodb://localhost/AlienDBex'
const app = express()

mongoose.connect(url,{useNewUrlParser:true})
const con = mongoose.connection //connect with db
//nodejs will say once you are connected with the database please let me know
con.on('open',()=>{ //when the db is in open connection then use the callback function and send the message as connected
  console.log('connected...')
})
//time to get to access from client using postman
//for different url we have different handlers and to acheive that we have to create routers
app.use(express.json())
//for routing
const aliensRouter = require('./routes/aliens')
//add a middleware or url - for all aliens request you have to send request to aliens router
app.use('/aliens',aliensRouter)

app.listen(9000,()=>{
  console.log('Server started')
})