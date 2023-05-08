const express = require('express')
const colors = require('colors')
const dotenv = require("dotenv").config()
const port = process.env.PORT || 5000
const {errorHandler} = require('./middleware/errorMiddleware')
const connectDB = require(`./config/db`)
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use('/api/goals', require('./routes/goalRoutes'))

app.use(errorHandler)
connectDB()

app.listen(port, () => console.log(`Server started on port ${port}`))
