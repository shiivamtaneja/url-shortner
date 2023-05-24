const mongoose = require('mongoose')

const urlSchema = mongoose.Schema({
    shortId: {
        typeof: String,
        required: true,
        unique: true
    },
    redirectUrl: {
        typeof: String,
        required: true,
    }
})

const URL = mongoose.model('url', urlSchema)

model.exports = URL;