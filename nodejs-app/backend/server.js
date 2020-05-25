const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

// const usersRouter = require('./routers/users')
// const exercisesRouter = require('./routers/exercises')

require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 5000 

app.use(cors())
app.use(express.json())

const uri = process.env.ATLAS_URI
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true , useUnifiedTopology: true })

const connection = mongoose.connection
connection.once('open' , () => console.log('Connect to mongoDB successful'))

// use router 
app.use('/users' , require('./routers/users'))
app.use('/exercises', require('./routers/exercises'))

app.listen(PORT, () => console.log(`Server is running at port: ${PORT}`))
