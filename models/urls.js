const mongoose = require('mongoose')

const urlSchema = mongoose.Schema(
    {
        shortId: {
            typeof: String,
            required: true,
            unique: true
        },
        redirectUrl: {
            typeof: String,
            required: true,
        },
        visitHistory: [{ timestamp: { typeof: Number } }]
    },
    { timestamp: true }
)

const URL = mongoose.model('url', urlSchema)

module.exports = URL;