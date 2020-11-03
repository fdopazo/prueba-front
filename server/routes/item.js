const express = require('express');
const app = express();
const cors = require("cors");
const { getMLApi } = require('../consumer/consumer');
app.use(cors());

app.get('/', async (req, res) => {

    const resp = await getMLApi('motorola', 0, 50);
    const resp2 = resp.data.results.map((item) => ({
        categories: []
    }))
    return res.json({ res: resp.data.results })

    // getMLApi('masadasfasfasf', 0, 4).then((result) => res.json({ resp: result.data.results }))
    //     .catch(res.json({ err }))

})


app.get('/s', (req, res) => {


})

module.exports = app;