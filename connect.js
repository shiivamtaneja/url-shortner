const mongoose = require('mongoose')

async function connectToMongeDB(url) {
    return mongoose.connect(url)
}

module.exports = {
    connectToMongeDB,
}