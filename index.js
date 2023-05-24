const express = require('express')
const { connectToMongeDB } = require('./connect')
const urlRoute = require('./routes/url')
const app = express()
const PORT = 8001

connectToMongeDB('mongodb://127.0.0.1:27017/short-url')
    .then(() => console.log("Mongodb connected"))


app.use(express.json())

app.use('/url', urlRoute)

app.listen(PORT, () => console.log(`server started at PORT: ${PORT}`))