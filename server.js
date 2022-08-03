const express = require('express')
const cors = require('cors');
const colors = require('colors')
const dotenv = require('dotenv').config()
const { errorHandler } = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const port = process.env.PORT || 5000
const octopusRoutes = require('./routes/octopusRoutes')

connectDB()

const app = express()

const orders = require("./mockData/orders.json")

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors({
  origin: "http://localhost:3000"
}));

app.use('/octopus', octopusRoutes)

app.get('/api', (req, res) => {
  res.json(orders)
})

app.use(errorHandler)

app.listen(port, () => {
  console.log(`server is listening on port ${port}`)
})
