//schema of your db
const mongoose = require('mongoose')

const aliensSchema = new mongoose.Schema({

  name: {
    type: String,
    required: true
  },
  tech: {
    type: String,
    required: true
  },
  sub: {
    type: Boolean,
    required: true,
    default: false
  }
})

module.exports = mongoose.model('Alien',aliensSchema)