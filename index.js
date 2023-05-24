const express = require('express')
const { connectToMongeDB } = require('./connect')
const { handleGetAnalytics } = require('./controllers/url')
const urlRoute = require('./routes/url')
const URL = require('./models/urls')
const app = express()
const PORT = 8001

connectToMongeDB('mongodb://127.0.0.1:27017/short-url')
    .then(() => console.log("Mongodb connected"))


app.use(express.json())

app.use('/url', urlRoute)

app.get('/:shortId', async (req, res) => {
    const shortId = req.params.shortId;
    const entry = await URL.findOneAndUpdate({
        shortId
    }, {
        $push: {
            visitHistory: { timestamp: Date.now() }
        }
    })

    res.redirect(entry.redirectUrl)
})

app.get('/analytics/:shortId', handleGetAnalytics)

app.listen(PORT, () => console.log(`server started at PORT: ${PORT}`))