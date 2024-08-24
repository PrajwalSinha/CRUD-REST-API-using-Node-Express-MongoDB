const express = require('express')

const router = express.Router()

const Alien = require('../models/aliens')

router.get('/',async(req,res)=>{
  try{
    //fetch all the aliens from db and send it
    //MVC - model , view and controller
    const aliens = await Alien.find()
    res.json(aliens)
  }catch(err){
    res.send('Error '+ err)
  }
})

router.get('/:id',async(req,res)=>{
  try{
    //fetch all the aliens from db and send it
    //MVC - model , view and controller
    const alien = await Alien.findById(req.params.id)
    res.json(alien)
  }catch(err){
    res.send('Error '+ err)
  }
})

//as we have no data in postman we need to post the data in order to do so we do as
router.post('/', async(req,res)=>{
  //sending request from client side
  const alien = new Alien({
    name: req.body.name,
    tech: req.body.tech,
    sub: req.body.sub
  })

  // saving it in the database
  try{
    const a1 = await alien.save()
    //for client some response
    res.json(a1)
  }catch(err){
    res.send('Error')
  }
})
//whenever yo work with database you dont send normal request you send async request so that it will not block your process

router.patch('/:id',async(req,res)=>{
  try{
    const alien = await Alien.findById(req.params.id)
    alien.sub = req.body.sub
    const a1 = await alien.save() //for delete instead of save use remove
    res.json(a1)
  }catch(err){
    res.send('Error')
  }
})
module.exports = router