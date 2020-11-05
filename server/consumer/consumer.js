const express = require('express');
const app = express();
const axios = require('axios');


//Consumer for Mercado Libre api

//Get all items
const getMLApi = async (query, offset, limit) => {
    const resp = await axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${query}`,
        {
            params: {
                offset,
                limit
            }
        })
    return resp;
}

//Get one item
const getItem = async (id) => {
    const resp = await axios.get(`https://api.mercadolibre.com/items/${id}`);

    return resp;
}

//Get description
const getDesc = async (id) => {
    const detail = await axios.get(`https://api.mercadolibre.com/items/${id}/description`);
    return detail
}


module.exports = {
    getMLApi,
    getItem,
    getDesc
}