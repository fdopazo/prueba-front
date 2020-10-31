const express = require('express');
const app = express();
const { getMLApi } = require('../consumer/consumer');

app.get('/', (req, res) => {

    getMLApi('motorola', 0, 4).then((result) => res.json({ resp: result.data.results }))
        .catch(err => console.log(err))

})

module.exports = app;