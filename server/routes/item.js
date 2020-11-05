const express = require('express');
const app = express();
const cors = require("cors");
const { getMLApi, getItem, getDesc } = require('../consumer/consumer');
app.use(cors());

// Main request for send all data
app.get('/', async (req, res) => {
    let query = req.query.data
    try {

        // Formatt corresponding body
        const resp = await getMLApi(query, 0, 4);
        // if (resp.data.results.length != 0) {
        let categories = resp.data.filters[0].values[0].path_from_root.map((category) => {
            return category['name']
        })

        let items = resp.data.results.map((item) => ({
            id: item.id,
            title: item.title,
            price: {
                currency: item.currency_id,
                amount: item.price,
            },
            picture: item.thumbnail,
            condition: item.condition,
            free_shiping: item.shipping.free_shipping,
            seller_address: item.seller_address.state.name
        }))
        author = {
            name: "Facundo",
            lastname: "Dopazo"
        }

        response = {
            author,
            categories,
            items
        }

        return res.json({ ok: true, status: 200, res: response })
    } catch (e) {
        return res.json({ res: { ok: false, message: `Not results found` } })

    }


})

//Get a particular item

app.get('/item/:id', async (req, res) => {

    let id = req.params.id
    try {
        const resp = await getItem(id);
        const desc = await getDesc(id)

        author = {
            name: "Facundo",
            lastname: "Dopazo"
        }

        item = {
            id: resp.data.id,
            title: resp.data.title,
            price: {
                currency: resp.data.currency_id,
                amount: resp.data.price,
            }
        }

        response = {
            author,
            item,
            picture: resp.data.pictures[0].url,
            condition: resp.data.condition,
            free_shipping: resp.data.free_shipping,
            sold_quantity: resp.data.sold_quantity,
            description: desc.data.plain_text
        }

        res.json({ res: response, status: 200, ok: true })
    } catch (e) {
        res.json({ res: { ok: false, message: `Not found results with id: ${id}` } })
    }

})

module.exports = app;