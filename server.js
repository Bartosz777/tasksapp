require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const taskRouter = require('./routes/task')

const app = express()

//middleware
app.use(express.json())

// routes
app.use('/api/tasks', taskRouter)


// connect to db
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    // listen for requests
    app.listen(process.env.PORT, () => {
      console.log('connected to db & listening on port', process.env.PORT)
    })
  })
  .catch((error) => {
    console.log(error)
  })