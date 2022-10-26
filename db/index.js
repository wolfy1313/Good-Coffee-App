const mongoose = require('mongoose')

let MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/coffeeDatabase'

mongoose
  .connect(MONGODB_URI)
  .then(() =>{
    console.log('Succesfully connected to MongoDB') 
  })
  .catch(e => {
    console.log('Connection error', e.message)
  })

  const db = mongoose.connection

  module.exports = db