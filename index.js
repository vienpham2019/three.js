const express = require('express')
const path = require('path')

const logger = require('./middleware/logger')

const app = express()

//bodyparser middleware
app.use(express.json()) // handle raw json()
app.use(express.urlencoded({extended: false}))

//init middleware 
app.use(logger)

//Set static folder 
app.use(express.static(path.join(__dirname, 'public')))

// Member api routers
app.use('/api/members', require('./routers/api/members'))

const PORT = process.env.PORT || 5000 

app.listen(PORT , () => console.log(`Server is start at port ${PORT}`))