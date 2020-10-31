const express = require('express')
const app = express()
const bodyParser = require('body-parser');
require('./config/config');
const cors = require("cors");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Enable corses if it is dev environment
if (process.env.NODE_ENV == 'env') {
    app.use(cors());
}

//Import routes
app.use(require('./routes/index.js'));

app.listen(3002, () => {
    console.log("Listen Port:", 3002)
})