const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv/config')

const app = express()

app.use(cors())
app.use(express.json())
// body middware
app.use(express.urlencoded({extended: false}))

// data base 
const uri = process.env.MONGOOSE_URL
mongoose.connect(uri ,  {useNewUrlParser: true, useCreateIndex: true , useUnifiedTopology: true })

const connection = mongoose.connection 
connection.once('open' , () => console.log('Connect to database...'))

//routers
app.use('/users' , require('./routers/users'))

const PORT = process.env.PORT || 5000 

app.listen(PORT , () => console.log(`Server running on port: ${PORT}`))