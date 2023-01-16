const express = require('express')
require('dotenv').config()

// routes
const TestRouter = require('./Routes/route')

const app = express()
const port = process.env.PORT || 9999

//use routes
app.use('/nvg',TestRouter)


app.listen(port,()=>{
    console.log(`App has been started successfully @ ${port}`)
})