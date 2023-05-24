const { nanoid } = require('nanoid')

const URL = require('../models/urls')

async function handleGenerateNewShortURL(req, res) {
    const body = req.body;
    if (!body.url) return res.status(400).json({ error: "URL is required" })
    const shortID = nanoid(8);

    await URL.create({
        shortID: shortID,
        redirectURl: body.url,
        visitHistory: []
    })

    return res.json({ id: shortID })
}


module.exports = {
    handleGenerateNewShortURL,
}